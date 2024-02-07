import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import { useStateProvider } from '../../store';
import { useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../atoms/currentUser';

const Breadcub = props => {
  const currentUser = useRecoilValue(currentUserAtom);
  const { pathname } = useLocation();

  const dashboardName = ({ name, role }) => {
    if (String(name).replace(/\s/g, '').length > 0) return name;
    return String(role).replace(/\s/g, '').length > 0 ? role : 'User';
  };

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const { paths } = props;
    const [routes] = pathname.split(/\/\d+/);
    const invertPaths = _.invert(paths);

    let newbreadcrumbs = routes.split('/').map(
      route => ({ name: invertPaths[`/${route}`], path: `/${route}` }),
    );

    const editOrShowPath = pathname.replace(/\d+/, ':id');
    newbreadcrumbs = [
      ...newbreadcrumbs,
      { name: invertPaths[routes], path: routes },
      { name: invertPaths[pathname], path: pathname },
      { name: invertPaths[editOrShowPath], path: editOrShowPath },
    ].filter(route => route.name);
    newbreadcrumbs = _.uniqBy(newbreadcrumbs, 'name');
    setBreadcrumbs(newbreadcrumbs);
  }, [props.location]);

  return (
    <div className="breadcrumbs-area">
      <h3>
        {`${dashboardName(currentUser)}'s Dashboard`}
      </h3>
      <ul>
        {breadcrumbs.map(breadcub => (
          <li key={breadcub.name}>
            <Link href="#" to={breadcub.path}>{breadcub.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Breadcub.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  paths: PropTypes.shape({
    edit: PropTypes.string,
    home: PropTypes.string,
    show: PropTypes.string,
  }),
};

export default React.memo(Breadcub);
