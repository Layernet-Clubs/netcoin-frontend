import React from 'react';
interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {}
const Center: React.FC<CenterProps> = ({
  className,
  children,
  style,
  ...rest
}) => {
  return (
    <div
      className={
        className + ' fixed relative left-1/2 -translate-x-1/2 transform'
      }
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Center;
