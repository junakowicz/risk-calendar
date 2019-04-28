import moment from 'moment';
import { DateInfo } from '../store/calendar/types';

let now = moment().format('LLLL');

export const getCurrentDate = ():DateInfo => {
    // const month =  moment("2012-02", "YYYY-MM").daysInMonth() 
    const month =  moment().daysInMonth() 
    // var check = moment('2014-07-28', 'YYYY/MM/DD');
    const now = moment()
    const monthIndex = now.format('M');
    const monthName = now.format('MMMM');
    var day   = now.format('D');
    var year  = now.format('YYYY');



    const out = {
        time: 0,
        day: {
            index: parseInt(now.format('D'), 10) ,
            name: now.format('DDDD')
        },
        month: {
            index: parseInt(now.format('M'), 10) ,
            name: now.format('MMMM')
        },
        year: parseInt(now.format('YYYY'), 10)
    }

console.log(out)
return out

} 