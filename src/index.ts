declare var global: any;
import dayjs from 'dayjs';
import 'dayjs/locale/ja'
import inviteCalendar from './modules/inviteCalender/inviteCalender';
import { makeSchedule } from './modules/makeSchedule/makeSchedule';
import setHolidays from './modules/setHolidays/setHolidays';
import tableToClass from './modules/tableToClass/tableToClass';
dayjs.locale('ja') 
global.doGet = () => {
  const spreadSheet = SpreadsheetApp.getActive();
  const sheet = spreadSheet.getActiveSheet();
  const table = sheet?.getDataRange().getValues();
  tableToClass(table)
  setHolidays()
  const schedules = makeSchedule()
  const scheduleFormat = () => {
    return schedules.map(schedule=>{
      return {
        '日付': schedule.date.format('MM/DD (ddd)'),
        '担当': schedule.member.name,

      }

    })
  }
  const result = Browser.msgBox(`こちらの内容でカレンダーの予定を作成します。${JSON.stringify(scheduleFormat())}`,Browser.Buttons.OK_CANCEL);
  if(result=="ok"){
    inviteCalendar(schedules)
    Browser.msgBox("完了");
  }
}