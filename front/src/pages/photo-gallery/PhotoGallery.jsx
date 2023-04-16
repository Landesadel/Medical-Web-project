import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GalleryService } from '../../services/gallery.service';
import styles from './PhotoGallery.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const PhotoGallery = () => {
	const [gallery, setGallery] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			GalleryService.getAll().then((res) => setGallery(res));
		} catch (error) {
			setError(error.message);
		}
	}, []);
	return !gallery ? (
		<h1>{error}</h1>
	) : (
			<div className="container">
			<Breadcrumbs activePage="Фотогалерея" />
			<h1 className="page-title">Фотогалерея</h1>
			<div className={styles.gallery}>
				{gallery.map((event) => (
					<div key={event.id} className={styles.event}>
						<Link to={`/photos/${event.id}`}>
							<div>
								<img src={event.url_preview} alt={event.title} />
								<h2 className={styles.eventTitle}>{event.title}</h2>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default PhotoGallery;
