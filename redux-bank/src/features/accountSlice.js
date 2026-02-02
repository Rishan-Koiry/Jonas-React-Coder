import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      }
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      if (state.balance >= state.loan) {
        state.balance -= state.loan;
        state.loan = 0;
        state.loanPurpose = '';
      }
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export function depositWithCurrency(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async function (dispatch) {
    dispatch({ type: 'account/convertingCurrency' });

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      const converted = data.rates.USD;

      dispatch({ type: 'account/deposit', payload: converted });
    } catch (error) {
      console.error('Currency conversion failed:', error);
      dispatch({ type: 'account/deposit', payload: amount });
    }
  };
}

export default accountSlice.reducer;
