import dayjs from "dayjs";
import globalConfig from "../../classes/globalConfig";

export default function() {
    if(globalConfig.skipHoliday) {
        const calendar = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com')
        if(!globalConfig.startDate || !globalConfig.endDate) throw new Error('開始日が設定されていません。')
        const events = calendar.getEvents(globalConfig.startDate.toDate(), globalConfig.endDate.toDate())
        globalConfig.holidays = events.map((event)=> {
            return dayjs(event.getAllDayStartDate().toISOString())
        })
    }
}