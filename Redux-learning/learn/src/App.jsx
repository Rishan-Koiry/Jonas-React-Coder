
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount, setAmount } from './redux/features/counterslice'

const App = () => {
  const num = useSelector((state) => state.counter.amount)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello Redux Toolkit!</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/** disable decrement when count is zero */}
        <button onClick={() => dispatch(decrement())} disabled={count === 0}>
          -
        </button>

        <strong>{count}</strong>

        <button onClick={() => dispatch(increment())}>+</button>

        <input
          value={num}
          type="number"
          onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
          style={{ width: '6rem' }}
        />

        <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
          Add Amount
        </button>

        <button
          onClick={() => dispatch(decrementByAmount(Number(num)))}
          disabled={count === 0 || Number(num) <= 0 || Number(num) > count}
        >
          Sub Amount
        </button>
      </div>
    </div>
  )
}

export default App

