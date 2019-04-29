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
          maxWidth: 500,
          minHeight: 300,
          margin: '0 auto',
          padding: 30
        };
    
        return (
          <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
              {this.props.children}
    
              <div className="footer">
                <button onClick={this.props.closeModal}>
                  Close
                </button>
              </div>
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

