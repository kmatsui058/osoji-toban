import { Dayjs } from "dayjs";
import Member from "./Member";

export class Schedule {
    public date: Dayjs
    public member: Member
    constructor(date: Dayjs, member: Member) {
        this.date = date
        this.member = member
    }
}