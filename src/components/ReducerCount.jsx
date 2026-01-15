import { useReducer } from "react"
import Button from "./Button/Button";


const initialState = { count : 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

export default function ReducerCount() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <h1>Reducer</h1>
            <p>Count: {state.count}</p>
            <Button buttonClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button buttonClick={() => dispatch({ type: 'decrement' })}>-</Button>
            <Button buttonClick={() => dispatch({ type: 'reset' })}>Reset</Button>
        </section>
    )
}