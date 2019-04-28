import { Reducer } from 'redux';
import { CalendarState, CalendarActionsTypes } from './types';

export const INITIAL_STATE: CalendarState = {
    currentMonth: new Date(),
    selectedDate: new Date(),

    currentDate: {
        time: 0,
        day: {
            index: 0,
            name: ''
        },
        month: {
            index: 0,
            name: ''
        },
        year: 0
    },

    // selectedDate: {
    //     time: 0,
    //     day: {
    //         index: 0,
    //         name: ''
    //     },
    //     month: {
    //         index: 0,
    //         name: ''
    //     },
    //     year: 0
    // },
    reminders: []
}

const reducer: Reducer<CalendarState> = (state: CalendarState = INITIAL_STATE, action) => {
    console.log('AC ', action)
    
    switch (action.type) {
        case CalendarActionsTypes.REMOVE_REMINDER:
            return {
                ...state,
                reminders: state.reminders.filter((reminder) => reminder !== action.payload)
            }
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


        default:
            return state
    }
}
export default reducer
