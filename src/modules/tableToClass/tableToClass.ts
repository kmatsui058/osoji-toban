import dayjs from "dayjs"
import globalConfig, { getInitSkipWeekDays, isWeekDay, weekDays } from "../../classes/globalConfig"
import Member from "../../classes/Member"

export default function tableToClass(table: any[][]) {
    table.forEach(((row, i) => {
        row.forEach((cell, j)=> {
            if(cell) {
                if(cell === '開始日') {
                    globalConfig.startDate = dayjs(table[i+1][j])
                }
                if(cell === '次の当番') {
                    globalConfig.assignMember = table[i+1][j]
                }
                if(cell === '期間（xヵ月）') {
                    globalConfig.period = table[i+1][j]
                }
                if(cell === '祝日') {
                    globalConfig.skipHoliday = table[i+1][j] === 'skip'
                }
                if(cell === '見出し') {
                    globalConfig.title = table[i+1][j]
                }
                setSkipWeekDays(cell, i, j, table)
                setSkipDays(cell, i, j, table)
                setMembers(cell, i, j, table)
            }
        })
    }))
}


function setSkipWeekDays(cell: any, i: number, j: number, table: any[]) {
    if(cell === 'スキップ曜日') {
        for(let k = i + 1; k < table.length; k +=1 ) {
            const test = table[k][j]
            if(isWeekDay(test)) {
                globalConfig.skipWeekDays[test] = true
            } 
        }
    }
}
function setSkipDays(cell: any, i: number, j: number, table: any[]) {
    if(cell === 'スキップ日') {
        globalConfig.skipDays = []
        for(let k = i + 1; k < table.length; k +=1 ) {
            const test = table[k][j]
            if(dayjs(test).isValid()) {
                globalConfig.skipDays.push(dayjs(test))
            } 
        }
    }
}

function setMembers(cell: any, i: number, j: number, table: any[]) {
    if(cell === '名前') {
        globalConfig.members = []
        let assignMember: Member | null = null
        for(let k = i + 1; k < table.length; k +=1 ) {
            const test = table[k][j]
            if(test) {
                const name = test
                const email = table[k][j + 1]
                const skipWeekDays = getInitSkipWeekDays()
                weekDays.forEach((weekDay, l)=> {
                    const weekDayTest = table[k][j+l+2]
                    if(weekDayTest === 'NA') {
                        skipWeekDays[weekDay] = true
                    }
                })
                const newMember = new Member(name, email, skipWeekDays)
                if (globalConfig.assignMember === newMember.name) {
                    assignMember = newMember
                    console.log({assignMember})
                }
                if(assignMember === null) {
                    console.log({assignMember2: assignMember})
                    // 次の担当より前の人はもうやったことにしておく
                    newMember.isDone = true
                }
                globalConfig.members.push(newMember)
            } 
        }
    }
}