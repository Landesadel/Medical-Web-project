import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PdfViewer from "../../../components/PdfViewer/PdfViewer";
import {Provider} from "react-redux";
import {store} from "../../../store/store";
import {MemoryRouter} from "react-router-dom";


describe('PdfViewer', () => {
    it('render pdf-viewer with file',() => {
        const snapshot=render(
            <Provider store={store}>
                <MemoryRouter>
            <PdfViewer url='statute2022.pdf'/>
                </MemoryRouter>
            </Provider>
        );

  expect(snapshot).toMatchSnapshot();
    });

});
