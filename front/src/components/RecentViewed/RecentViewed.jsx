import React from 'react';
import RecentViewedItem from './RecentViewedItem';
import styles from './RecentViewed.module.scss';

const statements = [
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	},
	{
		title:
			'Продлено сотрудничество с Обществом симуляции в здравоохранении (SSH).',
		description:
			'24 января 2023 года в Орландо (США) было продлено соглашение о сотрудничестве между Российским обществом симуляционного обучения (РОСОМЕД) и Обществом симуляции в здравоохранении (SSH). Соглашение по...',
		image: '/imagesTest/statement.jpeg',
		link: 'https://rosomed.ru/news/prodleno-sotrudnichestvo-s-obschestvom-simulyatsii-v-zdravoohranenii-ssh',
	}
];

const RecentViewed = () => {
	return (
		<React.Fragment>

		<div className={styles.sidebar}>

			<div className={`${styles.list}`}>
				{statements.map((s, i) => (
					<RecentViewedItem key={i} statement={s} />
				))}
			</div>
		</div>
			</React.Fragment>
	);
};

export default RecentViewed;
