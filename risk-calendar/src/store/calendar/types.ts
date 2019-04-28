export enum CalendarActionsTypes {

    ADD_REMINDER = '@calendar/ADD_REMINDER',
    REMOVE_REMINDER = '@calendar/REMOVE_REMINDER',
    SELECT_DATE = '@calendar/SELECT_DATE',
    SET_MONTH = '@calendar/SET_MONTH'
}


export interface DateEntity {
    index: number
    name: string
}

export interface DateInfo {

    time: number
    day: DateEntity
    month: DateEntity
    year: number

}

export interface CalendarState {

    readonly currentMonth: Date
    // readonly selectedDate: DateInfo
    readonly selectedDate: Date
    readonly currentDate: DateInfo


    readonly reminders: DateInfo[]
}