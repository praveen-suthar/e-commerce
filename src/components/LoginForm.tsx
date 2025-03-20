import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/authSlice';
import { RootState } from '../store';
import { AppDispatch } from '../store';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password })).unwrap();
      navigate('/products');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-blue-700 flex ">
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-white text-5xl font-bold mb-4">ShopStyle</h1>
        <h2 className="text-white text-6xl font-bold mb-4">Welcome Back</h2>
        <p className="text-white text-xl">Your journey continues here</p>
      </div>
      
      <div className="w-1/2 bg-white p-16 flex items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Log in</h2>
          <p className="text-gray-600 mb-8">Enter your credentials to access your account</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600">Forgot password?</a>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
            
            {error && (
              <p className="text-red-500 mt-4">{error}</p>
            )}
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or continue with</p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 border rounded-lg">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-6 h-6" />
              </button>
              <button className="p-2 border rounded-lg">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <p className="text-center mt-8">
            Don't have an account?
            <a href="#" className="text-blue-600 ml-1">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;