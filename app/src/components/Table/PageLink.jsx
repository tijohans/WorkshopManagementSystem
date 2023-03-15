/* import cn from 'classnames';

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = cn('page-link', className, {
    active,
    disabled,
  });

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
} */