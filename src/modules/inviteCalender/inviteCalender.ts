import { Schedule } from "../../classes/Schedule";

export default function inviteCalendar(schedules: Schedule[]) {
    const calendar = CalendarApp.getDefaultCalendar()
    schedules.forEach((schedule)=>{
        calendar.createAllDayEvent(`${schedule}さん${process.env.TOUBAN_NAME}`, schedule.date.toDate(), {guests: [schedule.member.email]})
    })

}