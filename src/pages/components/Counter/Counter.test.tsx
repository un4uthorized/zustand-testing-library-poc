import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import {Counter} from './Counter';
import { useCounter } from '../../../store/Counter/counter'
import { act } from 'react-dom/test-utils';

const initState = useCounter.getState();

beforeEach(() => {
    useCounter.setState(initState);
})


test("add zustand function", async () => {
    render(<Counter />);
    fireEvent.click(await screen.findByTestId('add'));
    expect(await screen.getByText(/1/)).toBeInTheDocument();
})

test("sub zustand function", async () => {
    render(<Counter />);
    act(() => {
        useCounter.setState({ counter: 15});
    })
    fireEvent.click(await screen.findByTestId('sub'));
    expect(await screen.getByText(/14/)).toBeInTheDocument();
})
