// NavigationBar.jsx
import { Link } from 'react-router-dom'; // If using React Router for navigation

const NavigationBar = () => {
  return (
    <nav className='navigation'>
      <div className='background-image' />
      <div className='background-image-2' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
