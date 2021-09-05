import dayjs from 'dayjs'
import getWeekDay from './getWeekDay'
describe('isSkipDate', ()=>{
    test('test isSkipDate', ()=>{
        expect(getWeekDay(dayjs('2021-09-05'))).toBe('日')
        expect(getWeekDay(dayjs('2021-09-06'))).toBe('月')
        expect(getWeekDay(dayjs('2021-09-07'))).toBe('火')
        expect(getWeekDay(dayjs('2021-09-08'))).toBe('水')
        expect(getWeekDay(dayjs('2021-09-09'))).toBe('木')
        expect(getWeekDay(dayjs('2021-09-10'))).toBe('金')
        expect(getWeekDay(dayjs('2021-09-11'))).toBe('土')
    })

})
