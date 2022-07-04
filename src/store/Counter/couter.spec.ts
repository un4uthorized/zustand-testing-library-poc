import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';
import { useCounter } from './counter';


const initState = useCounter.getState();

beforeEach(() => {
    useCounter.setState(initState);
})

it("add", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
        result.current.add()
    })
    expect(result.current.counter).toBe(1);
})

it("sub", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
        useCounter.setState({counter: 2})
        result.current.sub()
    })
    expect(result.current.counter).toBe(1);
})