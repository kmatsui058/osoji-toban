import { Dayjs } from "dayjs";
import { weekDays } from "../../classes/globalConfig";

export default function(date: Dayjs) {
    return weekDays[date.day() === 0 ? 6 : date.day() - 1]
}