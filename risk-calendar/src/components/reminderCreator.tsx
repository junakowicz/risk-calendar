import React from "react";
import dateFns from "date-fns";
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';
import { CalendarState, DateInfo, Reminder } from '../store/calendar/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as CalendarActions from '../store/calendar/actions'
import { getCurrentDate } from '../utils/calendarHelper';
import { selectDate, setMonth } from '../store/calendar/actions';
import { JSXElement } from "@babel/types";

//TODO make it reausable, pass props from parent 

interface StateProps {
  
}

interface DispatchProps {
  
}
interface OwnProps {
  addReminder(reminder: Reminder):void
  selectedDate: Date
}

type Props = StateProps & DispatchProps & OwnProps

class ReminderCreator extends React.Component<Props, any> {


    constructor(props: OwnProps) {
      super(props);
      this.state = {
        hour: 0,
        minute: 0,
        reminderDescription:"forgettable event" 
      }; 
    }
  
    handleHourChange = (event: any) => {
      this.setState({hour: event.target.value});
    }
    handleMinuteChange= (event: any) => {
      this.setState({minute: event.target.value});
    }
    handleDescChange = (event: any) => {
      this.setState({reminderDescription: event.target.value});
    }
  
    handleSubmit= (event: any) => {

      let reminderDate = new Date(this.props.selectedDate)
//TODO make it nicer
      let upH = dateFns.setHours(reminderDate,this.state.hour)
      let upMin = dateFns.setMinutes(upH, this.state.minute)

      this.props.addReminder({date: upMin, description: this.state.reminderDescription})
      event.preventDefault();
    }
  
    // createOption(val:number){
    //     return <option value={val}>Grapefruit</option>
    // }
    createNumOptions(from:number, to: number, currentVal:number, onChange: any ){
      const options = [];
      for (let i= from; i<=to; i++){
        options.push(<option value={i}>{i}</option>)
      }
      return <select value={currentVal} onChange={onChange}>
      {options}
    </select>

    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Hour:
            {this.createNumOptions(0,23,this.state.hour,this.handleHourChange)}
          </label>
          <label>
            Minute:
            {this.createNumOptions(0,59,this.state.minute,this.handleMinuteChange)}
          </label>
  
        <label>
          Description:
          <input
            name="reminderDescription"
            type="text"
            maxLength={30}
            value={this.state.reminderDescription}
            onChange={this.handleDescChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default ReminderCreator
