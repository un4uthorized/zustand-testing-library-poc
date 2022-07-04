import React from 'react'
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { useCounter } from '../../../store/Counter/counter'
import { List } from './List';
import { useList } from '../../../store/List/list';
import { setupServer } from 'msw/lib/node';
import { rest } from 'msw';

const initState = useList.getState();

beforeEach(() => {
    useList.setState(initState);
})

const server = setupServer(
    rest.get('/api/hello', async (req, res, ctx) => {
      return res(
        ctx.json([{ name: 'John'}]),
      )
    })
)
    
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('load list', () => {
    beforeEach(async () => {
        render(
            <List />
        )
        await waitForElementToBeRemoved(() => screen.getByText("loading..."))
    })

    it("renders", () => {
        screen.getByText("John")
    })
})


