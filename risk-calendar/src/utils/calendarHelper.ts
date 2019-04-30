import { Reminder } from '../store/calendar/types';
import dateFns from 'date-fns';

export const getRemindersForDay = (reminders: Reminder[], day: Date) => {
    return reminders.filter((r: Reminder) => {
        const { date } = r
        const isSameMonth = dateFns.isSameMonth(day, date)
        const isSameDay = dateFns.isSameDay(day, date)
        return isSameDay && isSameMonth
    }).sort((a:Reminder,b:Reminder)=>dateFns.compareAsc(a.date,b.date))
}