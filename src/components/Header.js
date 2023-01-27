import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS In JS
// const headingStyle = {
//   color: 'green',
//   backgroundColor: 'salmon',
// };

export default Header;
