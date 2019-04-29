import React from "react";
import dateFns from "date-fns";

import { Reminder } from "../../store/calendar/types";

interface StateProps {

}

interface DispatchProps {

}
interface OwnProps {
    reminder: Reminder
}

type Props = StateProps & DispatchProps & OwnProps

class ReminderCell extends React.Component<Props> {
    render() {
        const reminderTime = dateFns.format(this.props.reminder.date, 'HH:mm')
        const desc = this.props.reminder.description
        const id = this.props.reminder.id

        // return (<div>{reminderTime} | {desc}<span onClick= {this.props.removeReminder(id)}>X</span></div>
        return (
        <div className= "Reminder">{reminderTime} | {desc}
        <span className="icon">highlight_off</span></div>
        )
    }

}

export default ReminderCell

