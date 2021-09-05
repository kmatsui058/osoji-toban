declare var global: any;

global.doGet = () => {
    return ContentService.createTextOutput('Hello World');
}