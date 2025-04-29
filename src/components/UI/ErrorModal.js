import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import classes from './ErrorModal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button id="btn" type="button" onClick={props.onClick}>Okay</button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
          document.getElementById('backdrop-root')
      )}
      {
        ReactDOM.createPortal(
          <ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />,
          document.getElementById('overlay-root')
        )}
    </React.Fragment>
  );
};

export default ErrorModal;