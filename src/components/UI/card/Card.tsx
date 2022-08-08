import clsx from 'clsx';
import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  type?: 'column' | 'row';
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ type = 'row', className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        styles.card,
        type === 'column' && styles.column,
        className,
      )}
    >
      {children}
    </div>
  );
};
