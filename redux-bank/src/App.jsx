import { useSelector } from 'react-redux';
import Customer from './Customer';
import AccountOperations from './AccountOperations';
import BalanceDisplay from './BalanceDisplay';
import './App.css';

function App() {
  const customerName = useSelector((state) => state.customer.fullName);

  return (
    <div className="App">
      <h1>🏦 The React-Redux Bank</h1>
      {!customerName ? (
        <Customer />
      ) : (
        <>
          <Customer />
          <BalanceDisplay />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
