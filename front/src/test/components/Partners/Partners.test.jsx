import React from 'react';
import Partners from "../../../pages/Partners/Partners";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
import {MemoryRouter} from "react-router-dom";



describe('Partners', () => {
    it('render partners', () => {
        render(
            <MemoryRouter>
                <Partners/>
            </MemoryRouter>
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('https://virtumed.ru/')).toBeInTheDocument();
    });

    it('snapshot partners', () => {
        const snapshot=render(
            <MemoryRouter>
                <Partners/>
            </MemoryRouter>
        );
        expect(snapshot).toMatchSnapshot();

    });

});
