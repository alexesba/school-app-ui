import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import { getPaginationModel } from 'ultimate-pagination';

const Spinner = () => (
  <div className="paginate-spinner">
    <div />
    <div />
    <div />
  </div>
);

const buttonClassPage = type => kebabCase(type);

const getButtonClassNames = (value, type) => classNames({
  'paginate-btn': true,
  disabled: value,
  [buttonClassPage(type)]: true,
});

const PageElement = ({
  value,
  isActive,
  text,
  loading,
  spinner,
  elementType,
  onClick,
}) => (
  loading && spinner ? <Spinner /> : (
    <button
      className={getButtonClassNames(isActive, elementType)}
      disabled={isActive}
      onClick={onClick}
      type="button"
    >
      { text || value }
    </button>
  )
);

PageElement.propTypes = {
  elementType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  spinner: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

PageElement.defaultProps = {
  value: null,
  loading: false,
  spinner: false,
};

const Paginate = ({
  boundaryPagesRange,
  data,
  hideEllipsis,
  hideFirstAndLastPageLinks,
  hidePreviousAndNextPageLinks,
  perPage,
  siblingPagesRange,
  className,
  firstLabel,
  lastLabel,
  nextLabel,
  prevLabel,
  currentPage,
  isLoading,
  showSpinner,
  totalPages,
  onPageChange,
}) => {
  if (data.length === 0) {
    return null;
  }

  const goToPage = page => () => {
    onPageChange({ page, per_page: perPage });
  };

  const generatePagination = (options = { }) => getPaginationModel({
    // Optional
    boundaryPagesRange,
    siblingPagesRange,
    hideEllipsis,
    hidePreviousAndNextPageLinks,
    hideFirstAndLastPageLinks,
    ...options,
  });

  const pagination = useMemo(() => generatePagination({
    currentPage,
    totalPages,
  }), [currentPage, totalPages]);

  const LABELS = {
    FIRST_PAGE_LINK: firstLabel,
    NEXT_PAGE_LINK: nextLabel,
    PREVIOUS_PAGE_LINK: prevLabel,
    LAST_PAGE_LINK: lastLabel,
  };

  const buildPageElement = ({
    isActive,
    type: elementType,
    value,
    key,
  },
  loading,
  spinner) => (
    <PageElement
      type="button"
      elementType={elementType}
      text={LABELS[elementType] || value}
      value={value}
      key={key}
      isActive={isActive}
      onClick={goToPage(value)}
      loading={loading}
      spinner={spinner}
    />
  );

  return (
    <div className={classNames('paginate-container', { [className]: true })}>
      { pagination.map(page => buildPageElement(page, isLoading, showSpinner)) }
    </div>
  );
};

Paginate.propTypes = {
  boundaryPagesRange: PropTypes.number,
  className: PropTypes.string,
  currentPage: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  firstLabel: PropTypes.string,
  hideEllipsis: PropTypes.bool,
  hideFirstAndLastPageLinks: PropTypes.bool,
  hidePreviousAndNextPageLinks: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  lastLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  onPageChange: PropTypes.func,
  perPage: PropTypes.number,
  prevLabel: PropTypes.string,
  showSpinner: PropTypes.bool,
  siblingPagesRange: PropTypes.number,
  totalPages: PropTypes.number,
};

Paginate.defaultProps = {
  onPageChange: page => console.warn('trigger fetch page: ', page),
  perPage: 10,
  showSpinner: false,
  currentPage: 1,
  className: '',
  totalPages: 0,
  firstLabel: 'First',
  lastLabel: 'Last',
  prevLabel: 'Previous',
  nextLabel: 'Next',
  // number of always visible pages at the beginning and end
  boundaryPagesRange: 1,
  // number of always visible pages before and after the current one
  siblingPagesRange: 1,
  // boolean flag to hide ellipsis
  hideEllipsis: false,
  // boolean flag to hide previous and next page links
  hidePreviousAndNextPageLinks: false,
  // boolean flag to hide first and last page links
  hideFirstAndLastPageLinks: false,
  data: [],
};

export default Paginate;
