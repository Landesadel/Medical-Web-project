import React from 'react';
import {act, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from "../../../components/Header/Header";
import {Provider} from "react-redux";
import {store} from '../../../store/store.jsx';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from "react-router-dom";


describe('Header', () => {

    it('render header', () => {
        const snapshot = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Главная')).toBeInTheDocument();
        expect(screen.getByTestId('navigation')).toBeInTheDocument();
        expect(snapshot).toMatchSnapshot();
    });


    it('should allow to click link', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header/>
                </MemoryRouter>
            </Provider>
        );
        const user = userEvent.setup();
        act(() => {
            user.click(screen.getByTestId('study'));
        });
        await waitFor(() =>
            expect(screen.getByTestId('study')).not.toHaveClass("btn-close")
        );
    });


});

