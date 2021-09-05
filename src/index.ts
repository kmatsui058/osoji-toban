declare var global: any;
import dayjs from 'dayjs';
import 'dayjs/locale/ja'
dayjs.locale('ja') 
global.doGet = () => {
  const spreadSheet = SpreadsheetApp.getActive();
  const sheet = spreadSheet.getActiveSheet();
  const table = sheet?.getDataRange().getValues();
  Logger.log(JSON.stringify(table));
  Logger.log('hoge')
}