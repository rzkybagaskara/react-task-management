import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      {location.pathname === '/' && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
