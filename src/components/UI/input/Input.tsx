import styles from './input.module.scss';
import { clsx } from 'clsx';
import type { ChangeEvent } from 'react';

interface InputProps {
  type?: JSX.IntrinsicElements['input']['type'];
  id: string;
  inputName: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  autocomlepte?: 'on' | 'off';
  autofocus?: boolean;
  placholder?: string;
  readonly?: boolean;
  value?: string | number;
  label: string;
  onChange: (e: ChangeEvent) => void;
  onBlur?: any;
  hasError?: boolean;
  error?: string;
}

export const Input = ({
  type = 'text',
  id,
  inputName,
  isRequired = true,
  isDisabled = false,
  autocomlepte = 'off',
  autofocus = false,
  placholder,
  readonly = false,
  value = '',
  label,
  onChange,
  onBlur,
  hasError,
  error,
}: InputProps) => {
  return (
    <div className={clsx(styles.inputContainer, hasError && styles.error)}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={inputName}
        required={isRequired}
        disabled={isDisabled}
        value={value}
        autoComplete={autocomlepte}
        autoFocus={autofocus}
        placeholder={placholder}
        readOnly={readonly}
        className={clsx(styles.input, isDisabled && styles.disabled)}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={styles.errorText}>{hasError && error}</p>
    </div>
  );
};
