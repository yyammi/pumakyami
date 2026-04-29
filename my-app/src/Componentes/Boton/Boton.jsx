import './Boton.css';

function Boton({
  variante = 'ocre',
  tamaño,
  full = false,
  href,
  onClick,
  type = 'button',
  children,
  className = '',
  ...rest
}) {
  const clases = [
    'btn',
    `btn--${variante}`,
    tamaño ? `btn--${tamaño}` : '',
    full ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={clases} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={clases} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Boton;
