import { Reminder } from '../store/calendar/types';
import { getRemindersForDay } from './calendarHelper';
import dateFns from 'date-fns';

const date1 = new Date(2019, 8, 1, 11, 30)
const date11 = new Date(2019, 8, 1, 12, 30)
const date111 = new Date(2019, 8, 1, 12, 31)

const date2 = new Date(2019, 9, 2, 11, 30)
const date22 = new Date(2019, 9, 2, 12, 30)
const date222 = new Date(2019, 9, 2, 12, 31)


const allDates: Date[] = [date1, date11, date111, date2, date22, date222]
const unsortedSingleDay: Date[] = [date1, date111, date11]


const allReminders: Reminder[] = allDates.map((d: Date) => { return { date: d, id: 'noid', description: 'nodesc' } })
const unsortedSingleDayReminders: Reminder[] = unsortedSingleDay.map((d: Date) => { return { date: d, id: 'noid', description: 'nodesc' } })

describe('geting reminders for given day', function () {
    it('returns reminders only for specific day', function () {

        const result = getRemindersForDay(allReminders, date1)

        const expected = [{
            date: date1,
            id: 'noid',
            description: 'nodesc'
        },
        {
            date: date11,
            id: 'noid',
            description: 'nodesc'
        },
        {
            date: date111,
            id: 'noid',
            description: 'nodesc'
        }]

        expect(result).toEqual(expected);
    })
    it('returns sorted for specific day', function () {
        console.log(unsortedSingleDayReminders);

        const result = getRemindersForDay(unsortedSingleDayReminders, date1)

        const expected = [{
            date: date1,
            id: 'noid',
            description: 'nodesc'
        },
        {
            date: date11,
            id: 'noid',
            description: 'nodesc'
        },
        {
            date: date111,
            id: 'noid',
            description: 'nodesc'
        }]

        expect(result).toEqual(expected);
    })
})