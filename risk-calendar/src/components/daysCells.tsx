import React from "react";
import dateFns from "date-fns";
import { Reminder } from '../store/calendar/types';
import { getRemindersForDay } from '../utils/calendarHelper';
import ReminderList from "./reminders/reminderList";

interface StateProps {

}

interface DispatchProps {

}
interface OwnProps {
  currentMonth: Date
  selectedDate: Date
  reminders: Reminder[]
  onDateClick(day: Date): void

}

type Props = StateProps & DispatchProps & OwnProps

class DaysCells extends React.Component<Props> {

  render() {
    const { currentMonth, selectedDate } = this.props;


    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";


    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        const isSameMonth = dateFns.isSameMonth(day, monthStart)
        const isSameDay = dateFns.isSameDay(day, selectedDate)
        const remindersForDay = getRemindersForDay(this.props.reminders, day)

        days.push(
          <div
            className={`col cell ${
              !isSameMonth
                ? "disabled"
                : isSameDay ? "selected" : ""
              }`}
            key={day.toString()}
            onClick={() => this.props.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <ReminderList reminders={remindersForDay} removeReminder={() => null} />
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return (
      <div className="body">{rows}</div>
    )
  }
}

export default DaysCells

