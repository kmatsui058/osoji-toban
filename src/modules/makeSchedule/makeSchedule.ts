import globalConfig, { WeekDays } from "../../classes/globalConfig";
import Member from "../../classes/Member";
import { Schedule } from "../../classes/Schedule";
import getWeekDay from "../getWeekDay/getWeekDay";
import isSkipDate from "./isSkipDate";

export function makeSchedule(): Schedule[] {
    const result: Schedule[] = []
    const stockMember: Member[] = []
    let testDate = globalConfig.startDate
    let member = globalConfig.firstMember
    if (!testDate || !member || !globalConfig.endDate) throw new Error('初期化に失敗しました。スプレッドシートの構造を見直してください。')
    if (!isSkipDate(testDate)) {
        const weekDay = getWeekDay(testDate)
        if(member.skipWeekDay[weekDay]) {
            stockMember.push(member)
            member = getNextMember(weekDay, stockMember)
        } else {
            member.isDone = true
        }
        result.push(new Schedule(testDate, member))
    }
    do {
        testDate = testDate.add(1, 'day')
        if (!isSkipDate(testDate)) {
            const weekDay = getWeekDay(testDate)
            member = getNextMember(weekDay, stockMember)
            result.push(new Schedule(testDate, member))
        }
    } while (!globalConfig.endDate.isSame(testDate, 'day'));


    return result
}



function getNextMember(weekDay: WeekDays, stockMember: Member[]): Member {
    for (let i = 0; i < stockMember.length;i +=1) {
        const testMember = stockMember[i]
        if (!testMember.skipWeekDay[weekDay]) {
            stockMember.splice(i,1)
            testMember.isDone = false
            return testMember
        }
    }
    const notDoneMember = globalConfig.members.filter(testMember=>!testMember.isDone)
    if(notDoneMember.length) {
        for(let i = 0; i < notDoneMember.length; i +=1) {
            const testMember = notDoneMember[i]
            if(!testMember.skipWeekDay[weekDay]) {
                notDoneMember[i].isDone = true
                return notDoneMember[i]
            }
        }
        notDoneMember.forEach((target) =>stockMember.push(target))
    }
    globalConfig.members.forEach(testMember=>testMember.isDone=false)
    for(let i = 0; i < globalConfig.members.length; i +=1) {
        const testMember = globalConfig.members[i]
        if(!testMember.skipWeekDay[weekDay]) {
            globalConfig.members[i].isDone = true
            return globalConfig.members[i]
        }
    }
    throw Error('該当者なし')
}