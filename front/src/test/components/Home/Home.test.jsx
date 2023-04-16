import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
import Home from "../../../pages/home/Home";
import {QueryClient, QueryClientProvider} from "react-query";
import {store} from "../../../store/store";
import {Provider} from "react-redux";


describe('Home', () => {
    // it('render home components', () => {
    //     render(
    //         <BrowserRouter>
    //             <Home/>
    //         </BrowserRouter>
    //     );
    //
    //     expect(screen.getByRole('header')).toBeInTheDocument();
    // });


        const queryClient = new QueryClient();
        it('renders without crashing', () => {
            const snapshot =render(
                <Provider store={store}>
                <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Home />
                </QueryClientProvider>
                </BrowserRouter>
                </Provider>
            );
            expect(snapshot).toMatchSnapshot();
        });

});
