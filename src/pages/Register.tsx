
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show success message and reset form
    toast({
      title: "Registration Successful",
      description: "Your account has been created. Welcome to Sydney Driving School!",
    });
    
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget.reset();
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h1 className="text-2xl font-bold mb-6 text-center">Register an Account</h1>
            
            {submitted && (
              <div className="message-success mb-6" role="alert">
                Registration successful! You will be redirected to login.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b pb-2">Personal Information</h2>
                
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="input-field" 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="dob" className="form-label">Date of Birth <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    id="dob" 
                    className="input-field" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
              </div>
              
              {/* Account Security */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b pb-2">Account Security</h2>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password <span className="text-red-500">*</span></label>
                  <input 
                    type="password" 
                    id="password" 
                    className="input-field" 
                    placeholder="Choose a secure password"
                    required 
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Must be at least 8 characters with 1 uppercase letter, 1 number and 1 special character
                  </p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-red-500">*</span></label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    className="input-field" 
                    placeholder="Confirm your password"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="securityQuestion" className="form-label">Security Question <span className="text-red-500">*</span></label>
                  <select id="securityQuestion" className="input-field" required>
                    <option value="" disabled selected>Select a security question</option>
                    <option value="pet">What was the name of your first pet?</option>
                    <option value="school">What was the name of your first school?</option>
                    <option value="city">In what city were you born?</option>
                    <option value="mother">What is your mother's maiden name?</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="securityAnswer" className="form-label">Security Answer <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="securityAnswer" 
                    className="input-field" 
                    placeholder="Your answer"
                    required 
                  />
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b pb-2">Payment Information</h2>
                
                <div className="p-3 bg-muted mb-4 rounded text-sm">
                  A one-time $50 joining fee will be charged to register.
                </div>
                
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="form-label">Card Number <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    className="input-field" 
                    placeholder="1234 5678 9012 3456"
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="expiryDate" className="form-label">Expiry Date <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="expiryDate" 
                      className="input-field" 
                      placeholder="MM/YY"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="form-label">CVV <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="cvv" 
                      className="input-field" 
                      placeholder="123"
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 mb-4">
                  <Checkbox id="acceptFee" required />
                  <label 
                    htmlFor="acceptFee" 
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I authorize a $50 joining fee payment and agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
                  </label>
                </div>
              </div>
              
              {/* Preferences */}
              <div className="mb-6">
                <div className="flex items-start space-x-2">
                  <Checkbox id="emailPromo" />
                  <label 
                    htmlFor="emailPromo" 
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send me special offers and promotions by email
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button type="reset" className="px-4 py-2 border border-border rounded text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
