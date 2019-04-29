export enum CalendarActionsTypes {

    ADD_REMINDER = '@calendar/ADD_REMINDER',
    REMOVE_REMINDER = '@calendar/REMOVE_REMINDER',
    SELECT_DATE = '@calendar/SELECT_DATE',
    SET_MONTH = '@calendar/SET_MONTH',
    OPEN_REMINDERS_MODAL = '@calendar/OPEN_REMINDERS_MODAL',
    CLOSE_REMINDERS_MODAL = '@calendar/CLOSE_REMINDERS_MODAL',
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
    readonly selectedDate: Date
    readonly currentDate: DateInfo
    readonly remindersModalVisible: boolean

    readonly reminders: DateInfo[]
}