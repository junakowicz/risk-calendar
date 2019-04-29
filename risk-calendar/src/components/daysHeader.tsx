import React from "react";
import dateFns from "date-fns";
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';
import { CalendarState, DateInfo } from '../store/calendar/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as CalendarActions from '../store/calendar/actions'
import { getCurrentDate } from '../utils/calendarHelper';
import { selectDate, setMonth } from '../store/calendar/actions';

//TODO make it reausable, pass props from parent 

interface StateProps {
  
}

interface DispatchProps {
  
}
interface OwnProps {
    currentMonth: Date
}

type Props = StateProps & DispatchProps & OwnProps

class DaysHeader extends React.Component<Props> {

    render() {
        const dateFormat = "dddd";
        const days = [];
    
        let startDate = dateFns.startOfWeek(this.props.currentMonth);
    
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
          );
        }
        return (
 
        
         <div className="days row">{days}</div>
        )
      }
    }

export default DaysHeader

