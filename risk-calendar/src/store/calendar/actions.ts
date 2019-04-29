import { action } from 'typesafe-actions';
import { CalendarActionsTypes , DateInfo, Reminder} from './types';

export const removeReminder = () => action(CalendarActionsTypes.REMOVE_REMINDER)
export const selectDate = (dateToSelect : Date) => action(CalendarActionsTypes.SELECT_DATE, dateToSelect)
export const setMonth = (month : Date) => action(CalendarActionsTypes.SET_MONTH, month)
export const openRemindersModal = () => action(CalendarActionsTypes.OPEN_REMINDERS_MODAL)
export const closeRemindersModal = () => action(CalendarActionsTypes.CLOSE_REMINDERS_MODAL)
export const addReminder = (reminder: Reminder) => action(CalendarActionsTypes.ADD_REMINDER, reminder)