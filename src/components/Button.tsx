const Button = ({
  onClick,
  children,
  className,
  ...rest
}: {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
