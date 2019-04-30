import React from "react";

//TODO make it reausable, pass props from parent 

interface StateProps {

}

interface DispatchProps {

}
interface OwnProps {
  closeModal(): void
}

type Props = StateProps & DispatchProps & OwnProps

class Modal extends React.Component<Props> {

  render() {

//TODO move to css
    const backdropStyle = {
      position: 'fixed' as 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 600,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    const closeIcon = {
      fontSize: '2.5rem',
      float: 'right' as 'right',
      cursor: 'pointer'
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

export default Modal

