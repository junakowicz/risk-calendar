import React from "react";
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';
import { CalendarState, Reminder } from '../store/calendar/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as CalendarActions from '../store/calendar/actions'
import Modal from "./modal";
import DaysHeader from "./daysHeader";
import DaysCells from "./daysCells";
import MonthsHeader from "./monthsHeader";
import ReminderCreator from "./reminderCreator";
import dateFns from 'date-fns';
import { getRemindersForDay } from '../utils/calendarHelper';

interface StateProps {
    calendar: CalendarState
    selectedDate: Date,
    currentMonth: Date,
    remindersModalVisible: boolean,
    reminders: Reminder[]
}

interface DispatchProps {
    selectDate(dateToSelect: Date): void
    setMonth(month: Date): void
    closeRemindersModal(): void
    openRemindersModal(): void
    addReminder(r: Reminder): void
    removeReminder(id: string): void
}
interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps

class Calendar extends React.Component<Props> {

    onDateClick = (day: Date) => {
        this.props.selectDate(day)
        this.props.openRemindersModal()
    };

    handleAddReminder = (r: Reminder) => {
        console.log('addrem', r, this.props.addReminder)
        this.props.addReminder(r)
    }
    handleRemoveReminder = (id: string) => {
        this.props.removeReminder(id)
    }

    render() {
        const {currentMonth, selectedDate, reminders, setMonth, remindersModalVisible, closeRemindersModal } = this.props


        return (
            <>
                <div className="calendar">
                    <MonthsHeader currentMonth={currentMonth} setMonth={setMonth} />
                    <DaysHeader currentMonth={currentMonth} />
                    <DaysCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        onDateClick={this.onDateClick}
                        reminders={reminders} />
                </div>
                {remindersModalVisible &&
                    <Modal closeModal={closeRemindersModal} >
                        <h1>{dateFns.format(selectedDate, "D MMMM ")}</h1>
                        <ReminderCreator
                            addReminder={this.handleAddReminder}
                            removeReminder={this.handleRemoveReminder}
                            selectedDate={selectedDate}
                            reminders={getRemindersForDay(reminders, selectedDate)} />
                    </Modal>
                }
            </>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    calendar: state.calendar,
    selectedDate: state.calendar.selectedDate,
    currentMonth: state.calendar.currentMonth,
    reminders: state.calendar.reminders,
    remindersModalVisible: state.calendar.remindersModalVisible

})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CalendarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)

