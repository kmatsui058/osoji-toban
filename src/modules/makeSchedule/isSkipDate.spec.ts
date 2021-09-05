import dayjs from 'dayjs'
import globalConfig from '../../classes/globalConfig'
import tableToClass from '../tableToClass/tableToClass'
import testData from '../tableToClass/testData.json'
import isSkipDate from './isSkipDate'
describe('isSkipDate', ()=>{
    tableToClass(testData)
    test('test isSkipDate', ()=>{
        expect(isSkipDate(dayjs('2021-09-05'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-06'))).toBe(false)
        expect(isSkipDate(dayjs('2021-09-07'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-08'))).toBe(false)
        expect(isSkipDate(dayjs('2021-09-09'))).toBe(false)
        expect(isSkipDate(dayjs('2021-09-10'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-11'))).toBe(true)
    })
    test('test holiday', ()=>{
        globalConfig.holidays = [dayjs('2021-09-08')]
        expect(isSkipDate(dayjs('2021-09-05'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-06'))).toBe(false)
        expect(isSkipDate(dayjs('2021-09-07'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-08'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-09'))).toBe(false)
        expect(isSkipDate(dayjs('2021-09-10'))).toBe(true)
        expect(isSkipDate(dayjs('2021-09-11'))).toBe(true)
    })
})
