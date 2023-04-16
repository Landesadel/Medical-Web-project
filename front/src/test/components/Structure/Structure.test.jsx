import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Structure from "../../../pages/structure/Structure";


describe('Structure', () => {
    it('render structure', () => {
        render(
            <Structure/>
        );
        expect(screen.getByText('Ревизионная комиссия')).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('snapshot structure', () => {
        const snapshot=render(
            <Structure/>
        );
        expect(snapshot).toMatchSnapshot();

    });
});
