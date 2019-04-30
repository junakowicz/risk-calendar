import React from "react";
import dateFns from "date-fns";

import { Reminder } from "../../store/calendar/types";

interface StateProps {

}

interface DispatchProps {

}
interface OwnProps {
    removeReminder(id: string): void
    reminder: Reminder
}

type Props = StateProps & DispatchProps & OwnProps

class ReminderCell extends React.Component<Props> {

    removeHandler = (id: string) => {
        this.props.removeReminder(id)
    }

    render() {
        const reminderTime = dateFns.format(this.props.reminder.date, 'HH:mm')
        const desc = this.props.reminder.description
        const id = this.props.reminder.id

        const closeIcon = {
            fontSize: '1.5rem',
            float: 'right' as 'right',
            cursor: 'pointer'
        };

        return (
            <div>{reminderTime} | {desc}
                <span onClick={() => this.removeHandler(id)} style={closeIcon} className="icon">highlight_off</span></div>
        )
    }
}

export default ReminderCell

