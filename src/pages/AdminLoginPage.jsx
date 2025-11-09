import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import PageWrapper from '../components/PageWrapper';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    
    // Check credentials
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
      console.log('Admin login successful');
      // Navigate to admin dashboard
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <PageWrapper>
      <div className="pt-24 pb-12 px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-white mb-2 text-center">LOGIN</h1>
            <p className="text-gray-300 text-center mb-8">Welcome back!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email ID */}
              <div>
                <label className="block text-white mb-2">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <div>
                <PrimaryButton type="submit" className="w-full">
                  Login
                </PrimaryButton>
              </div>

              {/* Google Login Button */}
              <div>
                <SecondaryButton type="button" className="w-full flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Or login with Google
                </SecondaryButton>
              </div>

              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Use: admin@gmail.com / admin123
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdminLoginPage;

