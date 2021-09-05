import globalConfig, { WeekDays } from "../../classes/globalConfig";
import Member from "../../classes/Member";
import { Schedule } from "../../classes/Schedule";
import getWeekDay from "../getWeekDay.ts/getWeekDay";
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
            member = getNextMember(member, weekDay, stockMember)
        }
        result.push(new Schedule(testDate, member))
    }
    do {
        if (!isSkipDate(testDate)) {
            const weekDay = getWeekDay(testDate)
            member = getNextMember(member, weekDay, stockMember)
            result.push(new Schedule(testDate, member))
        }
        testDate = testDate.add(1, 'day') || null
    } while (globalConfig.endDate.isSame(testDate, 'day'));


    return result
}



function getNextMember(member: Member, weekDay: WeekDays, stockMember: Member[]): Member {
    for (let testMember of stockMember) {
        if (!testMember.skipWeekDay[weekDay]) {
            return testMember
        }
    }
    const currentIndex = globalConfig.members.findIndex((testMember => testMember.email === member.email))
    for (let i = currentIndex + 1; i < globalConfig.members.length; i += 1) {
        if (!globalConfig.members[i].skipWeekDay[weekDay]) {
            return globalConfig.members[i]
        } else {
            stockMember.push(globalConfig.members[i])
        }
    }
    for (let i = 0; i < globalConfig.members.length; i += 1) {
        if (!globalConfig.members[i].skipWeekDay[weekDay]) {
            return globalConfig.members[i]
        } else {
            stockMember.push(globalConfig.members[i])
        }
    }
    throw Error('該当者なし')
}