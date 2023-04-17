import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from "../../../components/Header/Header";
import {Provider} from "react-redux";
import { store } from '../../../store/store.jsx';
import {getByText} from "@testing-library/dom";
import userEvent from '@testing-library/user-event';






describe('Header', () => {
    it('render header', () => {
       const snapshot= render(
            <Provider store={store}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText('Главная')).toBeInTheDocument();
        expect(snapshot).toMatchSnapshot();
        //expect(screen.getByText('Главная').closest('a')).toHaveAttribute('href', 'http://localhost:3000/')
    });

});
// describe('should navigate to url1 when link is clicked', () => {
//
//     const componentName = render(
//         <Provider store={store}>
//             <BrowserRouter>
//                 <Header/>
//             </BrowserRouter>
//         </Provider>
//     );
//     userEvent.click(screen.getByText("Конференции"));
//
// });
