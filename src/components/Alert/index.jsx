import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useStateProvider } from '../../store';
import { closeAlert } from '../../constants/alerts/actions';
import { alertAtom } from '../../atoms/alert';
import { useRecoilState } from 'recoil';

export const AlertComponent = ({
  type = 'success', message, show, onClose,
}) => (show
  ? (
    <div className="ui-alart-box">
      <div className="dismiss-alart">
        <div
          role="alert"
          className={
            classNames(
              `alert alert-${type} alert-dismissible fade`,
              { show },
            )
          }
        >
          {message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

    </div>
  ) : null
);

AlertComponent.defaultProps = {
  show: false,
  onClose: () => console.warn('on alert close'),
};

AlertComponent.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  type: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'warning',
    'info',
  ]),
};

AlertComponent.defaultProps = {
  type: 'primary',
  message: undefined,
};

const Alert = () => {
  const [{ show, alertType: type, message, autoClose }, setAlert] = useRecoilState(alertAtom)

  const onClose = () => setAlert({
    autoClose: false,
    show: false,
    type: '',
    message: ''
  })

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => onClose(), 3000);
    }
  }, [message]);

  return (
    <AlertComponent
      show={show}
      type={type}
      message={message}
      onClose={onClose}
    />
  );
};

export default Alert;
