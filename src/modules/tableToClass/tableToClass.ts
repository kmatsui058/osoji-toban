import dayjs from "dayjs"
import globalConfig, { isWeekDay } from "../../classes/globalConfig"

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
                setSkipWeekDays(cell, i, j, table)
            }
        })
    }))
}


function setSkipWeekDays(cell: any, i: number, j: number, table: any[]) {
    if(cell === 'スキップ曜日') {
        console.log(table.length.toFixed())
        for(let k = i + 1; k < table.length; k +=1 ) {
            const test = table[k][j]
            if(isWeekDay(test)) {
                globalConfig.skipWeekDays[test] = true
            } 
        }
    }
}