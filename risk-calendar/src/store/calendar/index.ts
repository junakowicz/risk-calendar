import { Reducer } from 'redux';
import { CalendarState, CalendarActionsTypes, Reminder } from './types';

export const INITIAL_STATE: CalendarState = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    remindersModalVisible: false,
    reminders: []
}

const reducer: Reducer<CalendarState> = (state: CalendarState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CalendarActionsTypes.SELECT_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }
        case CalendarActionsTypes.SET_MONTH:
            return {
                ...state,
                currentMonth: action.payload
            }
        case CalendarActionsTypes.OPEN_REMINDERS_MODAL:
            return {
                ...state,
                remindersModalVisible: true
            }
        case CalendarActionsTypes.CLOSE_REMINDERS_MODAL:
            return {
                ...state,
                remindersModalVisible: false
            }
        case CalendarActionsTypes.REMOVE_REMINDER:
            return {
                ...state,
                reminders: state.reminders.filter((r: Reminder) => r.id !== action.payload)
            }
        case CalendarActionsTypes.ADD_REMINDER:
            let reminders = [...state.reminders]
            reminders.push(action.payload)

            return {
                ...state,
                reminders
            }

        default:
            return state
    }
}
export default reducer
