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

export interface Reminder {
    id: string
    date: Date
    description: string
}

export interface CalendarState {

    readonly currentMonth: Date
    readonly selectedDate: Date
    readonly remindersModalVisible: boolean

    readonly reminders: Reminder[]
}