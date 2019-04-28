import { action } from 'typesafe-actions';
import { CalendarActionsTypes , DateInfo} from './types';

export const addReminder = () => action(CalendarActionsTypes.ADD_REMINDER)
export const removeReminder = () => action(CalendarActionsTypes.REMOVE_REMINDER)
export const selectDate = (dateToSelect : Date) => action(CalendarActionsTypes.SELECT_DATE, dateToSelect)
export const setMonth = (month : Date) => action(CalendarActionsTypes.SET_MONTH, month)