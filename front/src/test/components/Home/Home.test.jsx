import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
import Home from "../../../pages/home/Home";
import {QueryClient, QueryClientProvider} from "react-query";
import {store} from "../../../store/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";


describe('Home', () => {

    const queryClient = new QueryClient();
    it('renders without crashing', () => {
        const snapshot = render(
            <Provider store={store}>
                <MemoryRouter>
                    <QueryClientProvider client={queryClient}>
                        <Home/>
                    </QueryClientProvider>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId('top-section')).toBeInTheDocument();
        expect(screen.getByTestId('news')).toBeInTheDocument();
        expect(screen.getByTestId('centers-slider')).toBeInTheDocument();
        expect(screen.getByTestId('conf-and-seminars')).toBeInTheDocument();
        expect(screen.getByTestId('sources')).toBeInTheDocument();
        expect(snapshot).toMatchSnapshot();
    });

});
