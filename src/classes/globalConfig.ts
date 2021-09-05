import { Dayjs } from 'dayjs'
import Member from './Member';
export type WeekDays = '月' | '火' | '水' | '木' | '金' | '土' | '日'
export const weekDays: WeekDays[] = ['月', '火', '水', '木', '金', '土', '日']

export function isWeekDay(test: any): test is WeekDays {
    return weekDays.includes(test)
}

export function getInitSkipWeekDays(): { [key in WeekDays]: boolean } {
    return {
        '土': false,
        '日': false,
        '月': false,
        '木': false,
        '水': false,
        '火': false,
        '金': false
    }
}

class GlobalConfig {
    private static instance: GlobalConfig;

    public startDate: Dayjs | null = null
    public assignMember: typeof Member.name | null = null
    public period: number | null = null
    public skipHoliday: boolean | null = null
    public skipWeekDays: { [key in WeekDays]: boolean } = getInitSkipWeekDays()

    public skipDays: Dayjs[] = []

    public members: Member[] = []

    private constructor() {
    }
    static getInstance() {
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig();
        }
        return GlobalConfig.instance;
    }

}

export default GlobalConfig.getInstance()