import './Boton.css';

/**
 * Boton — componente reutilizable
 *
 * Props:
 *  - variante: 'amarillo' | 'ocre' | 'naranja' | 'outline'  (default: 'ocre')
 *  - tamaño:   'chico' | 'grande'  (default: normal)
 *  - full:     boolean — ocupa todo el ancho
 *  - href:     si se pasa, renderiza un <a> en vez de <button>
 *  - onClick:  handler para <button>
 *  - type:     tipo de botón  (default: 'button')
 *  - children: contenido del botón
 */
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
