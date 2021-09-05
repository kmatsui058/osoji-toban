import { WeekDays } from "./globalConfig"

export default class Member {
    public readonly name: string
    public readonly email: string
    public readonly skipWeekDay: {[key in WeekDays]: boolean}
    public isDone = false

    constructor(name: string, email: string, skipWeekDay: {[key in WeekDays]: boolean}) {
        this.name = name
        this.email = email
        this.skipWeekDay = skipWeekDay
    }
}