import { useParams } from 'react-router-dom';
import 'photoswipe/dist/photoswipe.css';
import styles from '../photo-gallery/PhotoGallery.module.scss'
import { Gallery, Item } from 'react-photoswipe-gallery'

	const events = [
		{
			theme_id: 1,
			title: 'Event 1',
			description: 'Description for event 1',
			images: [
				{ id: 1, url: 'https://via.placeholder.com/500x300?text=Photo+1' },
				{ id: 2, url: 'https://via.placeholder.com/500x300?text=Photo+2' },
				{ id: 3, url: 'https://via.placeholder.com/500x300?text=Photo+3' }
			]
		},
		{
			theme_id: 2,
			title: 'Event 2',
			description: 'Description for event 2',
			photos: [
				{ id: 4, url: 'https://via.placeholder.com/500x300?text=Photo+4' },
				{ id: 5, url: 'https://via.placeholder.com/500x300?text=Photo+5' },
				{ id: 6, url: 'https://via.placeholder.com/500x300?text=Photo+6' }
			]
		}
	];

	const EventPhotos = () => {
		const { id } = useParams();
		const event = events.find((event) => event.theme_id === parseInt(id));
		console.log(event);
		return (
			<div className="container">
				<h1 className='page-title'>{event && event.title}</h1>
				<p className={styles.description}>{event.description}</p>
				<Gallery>
					<div className={styles.gallery}>
						{event && event.images.map((photo) => (
							<Item
								key={photo.id}
								original={photo.url}
								thumbnail={photo.url}
								width="1024"
								height="768"
							>
								{({ ref, open }) => (
									<img
										ref={ref}
										onClick={open}
										src={photo.url}
									/>
								)}
							</Item>
						))}
						</div>
				</Gallery>
			</div>
		);
	};
export default EventPhotos;