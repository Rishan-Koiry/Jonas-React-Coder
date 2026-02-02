import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCustomer } from './features/customerSlice';

function Customer() {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const customer = useSelector((state) => state.customer.fullName);
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      {customer ? (
        <p>Welcome, {customer}!</p>
      ) : (
        <div>
          <div className="inputs">
            <div>
              <label>Full name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label>National ID</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleClick}>Create new customer</button>
        </div>
      )}
    </div>
  );
}

export default Customer;
