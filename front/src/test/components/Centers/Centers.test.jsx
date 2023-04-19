import React from 'react';
import {act, render, screen, waitFor,cleanup,waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Provider} from "react-redux";
import {store} from '../../../store/store.jsx';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from "react-router-dom";
import CentersGallery from "../../../pages/centers-gallery/CentersGallery";
import axiosMock from "axios";
import "@testing-library/jest-dom/extend-expect"
import CenterList from "../../../components/CentersList/CenterList";

afterEach(cleanup);
describe('Centers', () => {

    it('render centers', () => {
        const snapshot = render(
            <Provider store={store}>
                <MemoryRouter>
                    <CentersGallery/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByTestId('centers-gallery')).toBeInTheDocument();
        expect(snapshot).toMatchSnapshot();
    });

    it('Error element: not to be in the component by default', async ()=> {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CentersGallery/>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });

    it("mock and get centers",  () => {
        const centers = [
            {
                id: 1,
                name: "Белорусский государственный медицинский университет",
                description: "<p>На базе учреждения образования <strong> «Белорусский государственный медицинский университет»</strong> в лаборатории практического обучения (ЛПО) с 2014 года, успешно реализуются симуляционные образовательные технологии подготовки медицинских кадров на всех этапах профессионального образования - высшее образование, послевузовское образование (интернатура, клиническая ординатура) и дополнительное профессиональное образование (повышение квалификации и профессиональная переподготовка). </p>\n" +
                    "<p>В 2021 году ЛПО переименована в <strong>Симуляционно-аттестационный центр</strong>.</p>\n" +
                    "<p>Всего в 2021/22 учебном году в симуляционно-аттестационном центре прошли обучение 6957 студентов. 226 интернов, 148 клинических ординаторов и 308 слушателей ФПК. Всего за год – 29 932 посещения (ежедневно в среднем <b>от 120 до 160 посещений в день</b>).</p>\n" +
                    "<p><b>Симуляционно-аттестационный центр</b> (далее - САЦ) оснащен современным симуляционным оборудованием, что позволяет проводить обучающие курсы по направлениям «терапия», «акушерство и гинекология», «анестезиология и реаниматология», «педиатрия», «общая врачебная практика», «неонатология», «хирургия», «медицинский уход и манипуляционная техника», «урология», «оториноларингология», «офтальмология» и «первая помощь».</p>\n" +
                    "<p>На базе САЦ  с 2017 года на постоянной основе проводится объективный структурированный клинический экзамен (далее – ОСКЭ): после третьего курса по теме «Медицинский уход и манипуляционная техника», после 5 курса по итогам врачебной практики, а так же как часть государственных экзаменов после 6 курса и у  врачей-интернов.</p>\n" +
                    "<p>Разработано и утверждено 34 паспорта ОСКЭ по различным дисциплинам, в том числе 12 паспортов утверждены МЗ РБ и размещены на сайте БелМАПО.</p>\n" +
                    "<p>Сегодня на базе САЦ проводятся курсы для преподавателей  и специалистов симуляционных центров  и лабораторий по отработке практических навыков  «Принципы построения симуляционных занятий».</p>\n",
                preview_photo: "/imagesTest/centersPreview/bgmu.jpg",
                phone: "+ 375 17 279-42-04",
                email: "lpn@bsmu.by",
                program: "",
                link: "https://www.bsmu.by/page/6/3406/",
                category_id: 1,
                photos: [{image_url:"/imagesTest/centersGallery/bgmu/1.jpg"}, {image_url:"/imagesTest/centersGallery/bgmu/2.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/3.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/4.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/5.jpg"}],

            }
        ];
render(
    <Provider store={store}>
        <MemoryRouter>
                <CenterList centers={centers}/>
        </MemoryRouter>
    </Provider>
);

      expect(screen.getByTestId('centers-list')).toBeInTheDocument();
      expect(screen.getByText('Белорусский государственный медицинский университет')).toBeInTheDocument();

    });


    it("mock and get centers",  () => {
        const centers = [
            {
                id: 1,
                name: "Белорусский государственный медицинский университет",
                description: "<p>На базе учреждения образования <strong> «Белорусский государственный медицинский университет»</strong> в лаборатории практического обучения (ЛПО) с 2014 года, успешно реализуются симуляционные образовательные технологии подготовки медицинских кадров на всех этапах профессионального образования - высшее образование, послевузовское образование (интернатура, клиническая ординатура) и дополнительное профессиональное образование (повышение квалификации и профессиональная переподготовка). </p>\n" +
                    "<p>В 2021 году ЛПО переименована в <strong>Симуляционно-аттестационный центр</strong>.</p>\n" +
                    "<p>Всего в 2021/22 учебном году в симуляционно-аттестационном центре прошли обучение 6957 студентов. 226 интернов, 148 клинических ординаторов и 308 слушателей ФПК. Всего за год – 29 932 посещения (ежедневно в среднем <b>от 120 до 160 посещений в день</b>).</p>\n" +
                    "<p><b>Симуляционно-аттестационный центр</b> (далее - САЦ) оснащен современным симуляционным оборудованием, что позволяет проводить обучающие курсы по направлениям «терапия», «акушерство и гинекология», «анестезиология и реаниматология», «педиатрия», «общая врачебная практика», «неонатология», «хирургия», «медицинский уход и манипуляционная техника», «урология», «оториноларингология», «офтальмология» и «первая помощь».</p>\n" +
                    "<p>На базе САЦ  с 2017 года на постоянной основе проводится объективный структурированный клинический экзамен (далее – ОСКЭ): после третьего курса по теме «Медицинский уход и манипуляционная техника», после 5 курса по итогам врачебной практики, а так же как часть государственных экзаменов после 6 курса и у  врачей-интернов.</p>\n" +
                    "<p>Разработано и утверждено 34 паспорта ОСКЭ по различным дисциплинам, в том числе 12 паспортов утверждены МЗ РБ и размещены на сайте БелМАПО.</p>\n" +
                    "<p>Сегодня на базе САЦ проводятся курсы для преподавателей  и специалистов симуляционных центров  и лабораторий по отработке практических навыков  «Принципы построения симуляционных занятий».</p>\n",
                preview_photo: "/imagesTest/centersPreview/bgmu.jpg",
                phone: "+ 375 17 279-42-04",
                email: "lpn@bsmu.by",
                program: "",
                link: "https://www.bsmu.by/page/6/3406/",
                category_id: 1,
                photos: [{image_url:"/imagesTest/centersGallery/bgmu/1.jpg"}, {image_url:"/imagesTest/centersGallery/bgmu/2.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/3.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/4.jpg"},{image_url:"/imagesTest/centersGallery/bgmu/5.jpg"}],

            }
        ];
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CenterList centers={centers}/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByTestId('centers-list')).toBeInTheDocument();
        expect(screen.getByText('Белорусский государственный медицинский университет')).toBeInTheDocument();

    });


});

