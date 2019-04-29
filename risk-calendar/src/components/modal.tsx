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
  closeModal():void
}

type Props = StateProps & DispatchProps & OwnProps

class Modal extends React.Component<Props> {

    render() {

    
        // The gray background
        const backdropStyle = {
          position: 'fixed' as 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 50
        };
    
        // The modal "window"
        const modalStyle = {
          backgroundColor: '#fff',
          borderRadius: 5,
          maxWidth: 600,
          minHeight: 300,
          margin: '0 auto',
          padding: 30
        };
        const closeIcon = {

          fontSize:'1.5rem',
float: 'right' as 'right'
        };
    
        return (
          <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
            <div onClick={this.props.closeModal} style={closeIcon} className="icon">highlight_off</div>
              {this.props.children}
            </div>
          </div>
        );
      }
    }

const mapStateToProps = (state: ApplicationState) => ({
   
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CalendarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

