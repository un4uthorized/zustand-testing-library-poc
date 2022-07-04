import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';
import { useList } from './list';
import { setupServer } from 'msw/node'
import { rest } from 'msw'


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


it("testing fetching function", async () => {
    const { result } = renderHook(() => useList());
    await act(async () => {
        await result.current.get()
    })

    expect(result.current.list).toMatchObject([ { name: 'John' } ])
    
})
