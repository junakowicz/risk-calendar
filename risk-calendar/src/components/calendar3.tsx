import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';
import { CalendarState, DateInfo } from '../store/calendar/types';
import { bindActionCreators, Dispatch } from 'redux';
import * as CalendarActions from '../store/calendar/actions'
import { getCurrentDate } from '../utils/calendarHelper';

interface StateProps {
    calendar: CalendarState
}

interface DispatchProps {
    selectDate(dateToSelect: DateInfo) : void

}
interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps

class Calendar extends Component<Props> {

    componentDidMount() {

        getCurrentDate()
        const { selectDate } = this.props
        const date = {
            time: 110,
            day: {
                index: 10,
                name: '1111'
            },
            month: {
                index: 20,
                name: '2222'
            },
            year: 3333
        }
        selectDate(date)

    }

    render() {
        const { calendar } = this.props

        return <h1>OI! {calendar.selectedDate.year}</h1>
    }



}

const mapStateToProps = (state: ApplicationState) => ({
    calendar: state.calendar

})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CalendarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)