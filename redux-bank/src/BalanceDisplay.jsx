import { useSelector } from 'react-redux';

function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);
  
  return <div className="balance">${balance.toFixed(2)}</div>;
}

export default BalanceDisplay;
