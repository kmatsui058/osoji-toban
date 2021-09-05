import globalConfig from "../../classes/globalConfig";
import { Schedule } from "../../classes/Schedule";

export default function inviteCalendar(schedules: Schedule[]) {
    const calendar = CalendarApp.getDefaultCalendar()
    schedules.forEach((schedule)=>{
        calendar.createAllDayEvent(`${schedule.member.name}さん${globalConfig.title}`, schedule.date.toDate(), {guests: schedule.member.email})
    })

}