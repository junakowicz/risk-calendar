import React from "react";
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';
import { CalendarState, DateInfo } from '../store/calendar/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as CalendarActions from '../store/calendar/actions'
import Modal from "./modal";
import DaysHeader from "./daysHeader";
import DaysCells from "./daysCells";
import MonthsHeader from "./monthsHeader";

interface StateProps {
    calendar: CalendarState
    selectedDate: Date,
    currentMonth: Date,
    remindersModalVisible: boolean,
}

interface DispatchProps {
    selectDate(dateToSelect: Date): void
    setMonth(month: Date): void
    closeRemindersModal(): void
    openRemindersModal(): void
}
interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps

class Calendar extends React.Component<Props> {

    onDateClick = (day: Date) => {
        this.props.selectDate(day)
        this.props.openRemindersModal()
    };

    render() {
        return (
            <>
                <div className="calendar">
                    <MonthsHeader currentMonth={this.props.currentMonth} setMonth={this.props.setMonth} />
                    <DaysHeader currentMonth={this.props.currentMonth} />
                    <DaysCells
                        currentMonth={this.props.currentMonth}
                        selectedDate={this.props.selectedDate}
                        onDateClick={this.onDateClick} />
                </div>
                {this.props.remindersModalVisible &&
                    <Modal closeModal={this.props.closeRemindersModal} />}
            </>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    calendar: state.calendar,
    selectedDate: state.calendar.selectedDate,
    currentMonth: state.calendar.currentMonth,
    remindersModalVisible: state.calendar.remindersModalVisible

})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CalendarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)

