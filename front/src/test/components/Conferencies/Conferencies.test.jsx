import React from 'react';
import {act, render, screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Provider} from "react-redux";
import {store} from '../../../store/store.jsx';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from "react-router-dom";
import CentersGallery from "../../../pages/centers-gallery/CentersGallery";
import "@testing-library/jest-dom/extend-expect"
import CenterList from "../../../components/CentersList/CenterList";
import ConferenceGallery from "../../../pages/conference-gallery/ConferenceGallery";
import ConferenceList from "../../../components/ConferenceList/ConferenceList";

afterEach(cleanup);
describe('Conferencies', () => {

    it('render conferencies', () => {
        const snapshot = render(
            <Provider store={store}>
                <MemoryRouter>
                    <ConferenceGallery/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByTestId('conferencies-gallery')).toBeInTheDocument();
        expect(snapshot).toMatchSnapshot();
    });

    it('Error element: not to be in the component by default', async ()=> {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ConferenceGallery/>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });

    it("mock and get conferencies",  () => {

            const future= [
            {
                id: 1,
                name: 'Conference 1. New event',
                description: 'This is description 1',
                short_text: 'This is short description of the Conference 1',
                image: 'https://mobimg.b-cdn.net/v3/fetch/a6/a690187c5de9495aba0ceb85d9c1eefd.jpeg?w=1470&r=0.5625',
                place: "Moskow",
                date_start: '2023-04-30 21:12:23',
                date_end: '2023-08-14 21:12:23',
                program: 'Program.pdf'
            }
        ];


        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ConferenceList conferencies={future}/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByTestId('conf-list')).toBeInTheDocument();
        expect(screen.getByText('Conference 1. New event')).toBeInTheDocument();

    });

});

