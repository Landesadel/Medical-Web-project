import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ activePage }) => {
	const routeNames = {
		photos: 'Фотогалерея',
		forum: 'Форум',
		services: 'Услуги',
		contact: 'Контакты',
	};

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
console.log(666, activePage);
  return (
    <div className={`container ${styles.breadcrumbs}`}>
      {pathnames.length > 0 && (
        <nav>
					<Link to="/">Главная</Link>
					<span>&nbsp;/&nbsp;</span>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <span key={routeTo}>{activePage || name}</span>
						) : (
							<span>
								<Link key={routeTo} to={routeTo}>
									{routeNames[name] || name}
								</Link>
								<span>&nbsp;/&nbsp;</span>
							</span>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export default Breadcrumbs;
