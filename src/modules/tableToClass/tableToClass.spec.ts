import globalConfig from '../../classes/globalConfig'
import tableToClass from './tableToClass'
import testData from './testData.json'
describe('tableToClass', ()=>{
    tableToClass(testData)
    test('test globalConfig', ()=>{
        expect(globalConfig.startDate?.format('MM')).toBe('09')
        expect(globalConfig.assignMember).toBe('ぎらっくる～')
        expect(globalConfig.period).toBe(1)
        expect(globalConfig.skipHoliday).toBe(true)
        expect(globalConfig.skipWeekDays['金']).toBe(true)
        expect(globalConfig.skipWeekDays['月']).toBe(false)

    })

})
