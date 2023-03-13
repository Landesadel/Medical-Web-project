import React from 'react';
import styles from "./Courses.module.scss";
import Stetoscope from "../../assets/testImages/stetoscop.jpg";
import Ancient from "../../assets/testImages/ancient.jpg";
import Medicine from "../../assets/testImages/mediczina.jpg";
import MyCarousel from '../MyCarousel/MyCarousel';


const data = [
    {
        image: Stetoscope,
        caption: "Хирургия",
        description: "Подробнее..."
    },
    {
        image: Ancient,
        caption: "Анестезиология и реанимация",
        description: "Подробнее..."
    },
    {
        image: Medicine,
        caption: "Функциональная диагностика",
        description: "Подробнее..."
    }
];

const Courses = () => {

    return (
        <div className={styles.courses} id="courses">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.coursesHeading}>Курсы</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <MyCarousel
                            data={data}
                            height={styles.carouselHeight}
                            captionStyle={styles.captionStyle}
                            linkStyle={styles.linkStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;