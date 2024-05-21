import React from 'react';
import clsx from 'clsx';

interface GenericRowProps {
  children: React.ReactNode;
  className?: string;
  items: number;
}

const GenericRow: React.FC<GenericRowProps> = ({
  children,
  className,
  items,
}) => {
  return (
    <div
      className={clsx('flex flex-row space-x-4', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const TwoItemRow: React.FC<RowProps> = ({ children, className }) => (
  <GenericRow items={2} className={className}>
    {children}
  </GenericRow>
);

export const ThreeItemRow: React.FC<RowProps> = ({ children, className }) => (
  <GenericRow items={3} className={className}>
    {children}
  </GenericRow>
);

export const FourItemRow: React.FC<RowProps> = ({ children, className }) => (
  <GenericRow items={4} className={className}>
    {children}
  </GenericRow>
);

export const FiveItemRow: React.FC<RowProps> = ({ children, className }) => (
  <GenericRow items={5} className={className}>
    {children}
  </GenericRow>
);
