import globalConfig from '../../classes/globalConfig'
import tableToClass from './tableToClass'
import testData from './testData.json'
describe('tableToClass', ()=>{
    tableToClass(testData)
    expect(globalConfig?.period).toBe(1)
})
