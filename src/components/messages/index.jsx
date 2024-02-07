import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ type, message }) => (
  <div className="message-box-wrap">
    <div className="card-body">
      <div className={`message-${type}-box`}>
        <div className="item-content">
          <div className="item-icon">
            <i className="fas fa-exclamation-circle" />
          </div>
          <h3 className="item-title">{message}</h3>
        </div>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  type: 'success',
  iconClasses: {
    error: 'fas fa-exclamation-circle',
    success: 'fas fa-check',
  },
};

Message.propTypes = {
  iconClasses: PropTypes.shape({
    error: PropTypes.string,
    success: PropTypes.string,
  }),
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default Message;
