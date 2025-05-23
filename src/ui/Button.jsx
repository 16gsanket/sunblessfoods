import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-2';

  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-3 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-xs',
    secondary:
      'px-4 py-2.5 sm:px-6 sm:py-3.5 inline-block rounded-full border-2 border-stone-300 bg-transparent font-semibold uppercase tracking-wide text-stone-500 text-sm transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <div>
        <button disabled={disabled} className={styles[type]} onClick={onClick}>
          {/* <button disabled={disabled}  className={className}> */}

          {children}
        </button>
      </div>
    );
  }
  return (
    <div>
      <button disabled={disabled} className={styles[type]}>
        {/* <button disabled={disabled}  className={className}> */}

        {children}
      </button>
    </div>
  );
}

export default Button;