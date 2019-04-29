import React from "react";
import { Reminder } from '../../store/calendar/types';
import ReminderCell from './reminder';
import { removeReminder } from '../../store/calendar/actions';

interface StateProps {

}

interface DispatchProps {

}
interface OwnProps {
    removeReminder(id:string):void
    reminders: Reminder[]
}

type Props = StateProps & DispatchProps & OwnProps

class ReminderList extends React.Component<Props> {


    render() {

        return (this.props.reminders.map((rem)=><ReminderCell reminder={rem} removeReminder={this.props.removeReminder}/>))
        
    }
}

export default  ReminderList