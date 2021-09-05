import globalConfig from '../../classes/globalConfig'
import tableToClass from './tableToClass'
import testData from './testData.json'
describe('tableToClass', ()=>{
    tableToClass(testData)
    test('test globalConfig', ()=>{
        expect(globalConfig.startDate?.format('YYYY/MM/DD')).toBe('2021/09/06')
        expect(globalConfig.assignMember).toBe('test')
        expect(globalConfig.period).toBe(1)
        expect(globalConfig.skipHoliday).toBe(true)
        expect(globalConfig.skipWeekDays['金']).toBe(true)
        expect(globalConfig.skipWeekDays['月']).toBe(false)
        expect(globalConfig.skipDays[0].format('YYYY/MM/DD')).toBe('2021/09/07')
        expect(globalConfig.members[2].name).toBe('夕暮おこは')
        expect(globalConfig.members[2].email).toBe('okohaoldworld@gmail.com')
        expect(globalConfig.members[2].skipWeekDay['月']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['火']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['金']).toBe(true)
        expect(globalConfig.members[2].skipWeekDay['土']).toBe(false)
        expect(globalConfig.members[2].skipWeekDay['日']).toBe(false)

    })

})
