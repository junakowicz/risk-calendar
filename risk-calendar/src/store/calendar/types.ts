export enum CalendarActionsTypes {

    ADD_REMINDER = '@calendar/ADD_REMINDER',
    REMOVE_REMINDER = '@calendar/REMOVE_REMINDER',
    SELECT_DATE = '@calendar/SELECT_DATE'
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

    readonly currentDate: DateInfo

    readonly selectedDate: DateInfo

    readonly reminders: DateInfo[]
}