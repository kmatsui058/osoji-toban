import globalConfig from '../../classes/globalConfig'
import tableToClass from './tableToClass'
import testData from './testData.json'
describe('tableToClass', ()=>{
    tableToClass(testData)
    test('test globalConfig', ()=>{
        expect(globalConfig.startDate?.format('YYYY/MM/DD')).toBe('2021/09/06')
        expect(globalConfig.assignMember).toBe('test')
        expect(globalConfig.period).toBe(2)
        expect(globalConfig.title).toBe('お掃除当番')
        expect(globalConfig.skipHoliday).toBe(true)
        expect(globalConfig.skipWeekDays['金']).toBe(true)
        expect(globalConfig.skipWeekDays['月']).toBe(false)
        expect(globalConfig.skipDays[0].format('YYYY/MM/DD')).toBe('2021/09/07')
        expect(globalConfig.members[2].name).toBe('test3')
        expect(globalConfig.members[2].email).toBe('test3@example.com')
        expect(globalConfig.members[2].skipWeekDay['月']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['火']).toBe(true)
        expect(globalConfig.members[2].skipWeekDay['木']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['土']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['日']).toBe(false)
    })

    test('最初の人以外が次の担当だったら、それより前の人はやったことにする', ()=>{
        console.log(testData[2][2] + '')
        testData[2][2] = globalConfig.members[1].name
        console.log(testData[2][2])
        tableToClass(testData)
        expect(globalConfig.members[0].isDone).toBe(true)
        expect(globalConfig.members[1].isDone).toBe(false)
        expect(globalConfig.members[2].isDone).toBe(false)
    })

})
