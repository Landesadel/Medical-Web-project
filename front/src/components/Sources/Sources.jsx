import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './Sources.module.scss';
import { routes } from '../../routes/route';
import {useAuth} from "../../hooks/useAuth";

const element1 = <FontAwesomeIcon icon={faFile} />;
const element2 = <FontAwesomeIcon icon={faBook} />;
const element3 = <FontAwesomeIcon icon={faVideo} />;

const data = [
	{
		image: element2,
		title: 'Литература',
		description: 'Методические пособия, книги, презентации',
		link: routes.ARTICLES.link,
	},
	{
		image: element3,
		title: 'Видеоматериалы',
		description: 'Обучающие видеоролики, конференции, лекции',
		link: routes.VIDEOS.link,
	},
];

const Sources = () => {
	// const { user } = useAuth();
	const user=true;
	return (
		<div className={styles.sources} id="sources">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className={styles.sourcesHeading}>Обучающие материалы</h2>
					</div>
				</div>
				<div className="row">
					{
						<div className={styles.sources}>
							{data.map((item, i) => {
								return (
									<div key={i} className={`me-auto mb-5 ${styles.sourcesItem}`}>
										<div className={styles.sourcesIcon}>{item.image}</div>
										<h3 className={styles.sourcesTitle}>{item.title}</h3>
										<p className={styles.sourcesText}>
											{item.description}
										</p>
										<NavLink to={user?item.link:routes.LOGIN.link} className={styles.link}>Подробнее...</NavLink>
									</div>
								)
							})}

						</div>
					}
				</div>
			</div>
		</div>
	);

};

export default Sources;