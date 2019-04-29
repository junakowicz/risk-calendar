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
    setMonth(month: Date): void
}

type Props = StateProps & DispatchProps & OwnProps

class MonthsHeader extends React.Component<Props> {

  nextMonth = () => {
    this.props.setMonth(dateFns.addMonths(this.props.currentMonth, 1))
};

  prevMonth = () => {
    this.props.setMonth(dateFns.subMonths(this.props.currentMonth, 1))
  };

    render() {
      const dateFormat = "MMMM YYYY";
        return (
          <div className="header row flex-middle">
          <div className="col col-start">
            <div className="icon" onClick={this.prevMonth}>
              chevron_left
            </div>
          </div>
          <div className="col col-center">
            <span>{dateFns.format(this.props.currentMonth, dateFormat)}</span>
          </div>
          <div className="col col-end" onClick={this.nextMonth}>
            <div className="icon">chevron_right</div>
          </div>
        </div>
        )
      }
    }

export default MonthsHeader
