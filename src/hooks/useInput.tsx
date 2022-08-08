import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (
  state: { value?: string; isTouched: boolean },
  action: { type: string; value?: string | undefined },
) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === 'TOUCHED') {
    return { isTouched: true, value: state.value };
  }

  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }

  return initialInputState;
};

export const useInput = (
  validateValue: (value: string | undefined) => boolean,
) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsValid: boolean = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (value: string) => {
    dispatch({ type: 'INPUT', value: value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: 'TOUCHED' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
