
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/components/ui/use-toast";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { isLoggedIn, login } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, consider any submission a successful login
    login();
    
    toast({
      title: isRegistering ? "Registration Successful" : "Login Successful",
      description: "Welcome to Sydney Driving School!",
    });
  };
  
  if (isLoggedIn) {
    return <Navigate to="/lessons" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-page">
        <div className="max-w-md mx-auto card">
          <h1 className="text-2xl font-bold mb-6">{isRegistering ? 'Create an Account' : 'Log In'}</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn-primary w-full mb-4">
              {isRegistering ? 'Register' : 'Log In'}
            </button>
            
            <p className="text-center text-sm">
              {isRegistering ? 'Already have an account?' : 'Need to create an account?'}{' '}
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-primary hover:underline"
              >
                {isRegistering ? 'Log In' : 'Register'}
              </button>
            </p>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
