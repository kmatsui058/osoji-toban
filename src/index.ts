declare var global: any;

global.doGet = () => {
  const spreadSheet = SpreadsheetApp.getActive();
  const sheet = spreadSheet.getActiveSheet();
  const table = sheet?.getDataRange().getValues();
  Logger.log(table);
  Logger.log('hoge')
}