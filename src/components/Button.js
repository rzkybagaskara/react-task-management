import PropTypes from 'prop-types';

// pada parameter button terdapat object destructuring yang diambil dari elemen jsx button pada header
const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'blue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
