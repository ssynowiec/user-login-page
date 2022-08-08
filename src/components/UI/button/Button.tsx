import styles from './button.module.scss';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  type?: JSX.IntrinsicElements['button']['type'];
  isDisabled?: boolean;
  value?: string;
  customClass?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  isDisabled = false,
  value,
  customClass,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(
        styles.button,
        customClass,
        isDisabled && styles.disabled,
      )}
      onClick={onClick}
    >
      {value || children}
    </button>
  );
};
