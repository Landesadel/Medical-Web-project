import React, {useEffect, useMemo, useState} from 'react';
import NewsInMedicine from '../../assets/testImages/newInMedicine.jpg';
import Relations from '../../assets/testImages/relations.jpg';
import Digital from '../../assets/testImages/digital.jpg';
import {Link} from 'react-router-dom';
import Cards from '../Cards/Cards';
import {routes} from '../../routes/route';
import styles from './News.module.scss';
import Banner from "../Banner/Banner";
import {useQuery} from "react-query";
import {NewsService} from "../../services/news.service";


// const data = [
//     {
//         id: 1,
//         imageUrl: NewsInMedicine,
//         title: 'Новые технологии в медицине',
//         shortText: '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
//         created_at: '12.02.2023',
//     },
//     {
//         id: 2,
//         imageUrl: Relations,
//         title: 'Новые технологии в медицине',
//         shortText: '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
//         created_at: '12.02.2023',
//     },
//     {
//         id: 3,
//         imageUrl: Digital,
//         title: 'Новые технологии в медицине',
//         shortText: '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
//         created_at: '12.02.2023',
//     },
//     {
//         id: 4,
//         imageUrl: Digital,
//         title: 'Новые технологии в медицине',
//         shortText: '24 января 2023 года в Орландо (США) в рамках работы Международной конференции по симуляции в здравоохранении (IMSH-2023) было продлено соглашение о сотрудничестве между Российским обществом симуляционно...',
//         created_at: '12.02.2023',
//     },
// ];


const News = () => {
    const {isLoading, data} = useQuery('News list', () => NewsService.getAll());
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        data?.sort(function (a, b) {
            return new Date(a?.created_at) - new Date(b?.created_at);
        });

        setLastNews(data?.length>3?data.splice(-3):data);
    }, [data])


    return (
        <div className={styles.news} id="news">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.newsHeading}>Новости и события</h2>
                    </div>
                </div>


                <div className="row">
                    {lastNews?   <Cards data={lastNews}/>:
                    <h4>Loading...</h4>}
                </div>

                <div className="row">
                    <div className="col">
                        <Link
                            to={routes.NEWS.link}
                            className={`${styles.gradientButton} ${styles.allNews}`}
                        >
                            Все новости
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
