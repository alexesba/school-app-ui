import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalConfirmation = ({
  show, message, onAccept, onCancel, loading,
}) => {
  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      return onCancel();
    }
    return false;
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [message]);

  return (
    <div className="ui-modal-box">
      { show && (
      <div className={classNames(
        'modal-backdrop fade', { show },
      )}
      />
      ) }
      <div className="modal-box">
        <div
          className={classNames('modal fade', { show })}
          id="confirmation-modal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
          style={{ display: show ? 'block' : 'none' }}
        >
          <div className="modal-dialog success-modal-content" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onCancel}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="success-message">
                  <div className="item-icon">
                    <i className="fas fa-exclamation" />
                  </div>
                  <h3 className="item-title">
                    {loading ? 'Loading' : message}
                  </h3>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="footer-btn bg-linkedin"
                  onClick={onAccept}
                >
                Ok
                </button>
                <button
                  type="button"
                  className="footer-btn bg-dark-low"
                  data-dismiss="modal"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalConfirmation.defaultProps = {
  message: undefined,
  loading: false,
};

ModalConfirmation.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalConfirmation;
