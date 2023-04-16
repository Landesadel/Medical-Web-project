import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from "../../../components/Header/Header";
import {Provider} from "react-redux";
import { store } from '../../../store/store.jsx';



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
    });


});
