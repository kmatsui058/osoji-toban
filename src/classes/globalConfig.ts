import dayjs from 'dayjs'
import Member from './Member';

class GlobalConfig {
    private static instance: GlobalConfig;

    public startDate: dayjs.Dayjs
    public assignMember: typeof Member.name
    public period: number

    private constructor(startDate: dayjs.Dayjs,  assignMember: typeof Member.name, period: number ) {
        this.startDate = startDate
        this.assignMember = assignMember
        this.period = period
    }
    static getInstance(startDate: dayjs.Dayjs,  assignMember: typeof Member.name, period: number) {
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig(startDate,  assignMember, period);
        }
        return GlobalConfig.instance;
    }
    
}

let instance: GlobalConfig | null = null

export const initialize = (startDate: dayjs.Dayjs,  assignMember: typeof Member.name, period: number) => {
    instance = GlobalConfig.getInstance(startDate,  assignMember, period)
}

export default instance