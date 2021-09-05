import { Dayjs } from "dayjs";
import globalConfig from "../../classes/globalConfig";
import getWeekDay from "../getWeekDay.ts/getWeekDay";

export default function isSkipDate(date: Dayjs): boolean {
    const weekDay = getWeekDay(date)
    if (globalConfig.skipWeekDays[weekDay]) {
        return true
    }
    for (let testDate of globalConfig.skipDays) {
        if (testDate.isSame(date, 'day')) {
            return true
        }
    }
    if (globalConfig.skipHoliday) {
        for (let holiday of globalConfig.holidays) {
            if (holiday.isSame(date, 'day')) {
                return true
            }
        }
    }

    return false
}
