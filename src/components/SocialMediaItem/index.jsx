import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils/index';

const SocialMediaItem = ({
  icon, title, total, backgroundColor,
}) => (
  <div className="col-lg-3 col-sm-6 col-12">
    <div className="card dashboard-card-seven">
      <div className={`social-media bg-${backgroundColor} hover-fb`}>
        <div className="media media-none--lg">
          <div className="social-icon">
            <i className={`fab fa-${icon}`} />
          </div>
          <div className="media-body space-sm">
            <h6 className="item-title">{title}</h6>
          </div>
        </div>
        <div className="social-like">{formatMoney(total)}</div>
      </div>
    </div>
  </div>
);

SocialMediaItem.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default SocialMediaItem;
