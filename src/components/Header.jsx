import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import PrimaryButton from './PrimaryButton';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Logo />
          
          <nav className="flex items-center gap-4 md:gap-6 flex-wrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-medium'
                  : 'text-white hover:text-yellow-400 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/submit"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-medium'
                  : 'text-white hover:text-yellow-400 transition-colors'
              }
            >
              Submit Prompt
            </NavLink>
            <NavLink
              to="/evaluation"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-medium'
                  : 'text-white hover:text-yellow-400 transition-colors'
              }
            >
              Evaluation Process
            </NavLink>
            <NavLink
              to="/scoreboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 font-medium'
                  : 'text-white hover:text-yellow-400 transition-colors'
              }
            >
              Scoreboard
            </NavLink>
          </nav>
          
          <NavLink to="/login">
            <PrimaryButton className="text-sm md:text-base">Admin Login</PrimaryButton>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

