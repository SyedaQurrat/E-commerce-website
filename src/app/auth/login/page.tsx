'use client';

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RiGoogleFill, RiLockLine, RiMailLine, RiUserAddLine } from "react-icons/ri";
import { Button } from '@heroui/button'; 
import { useAuth } from '../../../../context/authContext';
import { auth } from "../../../../lib/firebaseConfig";

export default function LoginPage() {  
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user , router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => { 
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      <Header />
      <Navbar />
      <Heading />
      <div className='flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#7E33E0] font-lato">Welcome Back</h1>
            <p className="text-[#6E7191] font-josefin">Sign in to continue your journey</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
              <RiMailLine className="text-[#7E33E0] w-5 h-5" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]" 
                required 
              />
            </div>
            <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
              <RiLockLine className="text-[#7E33E0] w-5 h-5" />
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]" 
                required 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              type="submit" 
              className="w-full bg-[#FB2E86] text-white py-3 rounded-xl font-semibold font-lato hover:shadow-lg transition-shadow duration-200"
            >
              Sign In
            </motion.button>
          </form>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#EEEFFB]" />
            <span className="text-[#A0A3BD] font-josefin">OR</span>
            <div className="flex-1 h-px bg-[#EEEFFB]" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={handleGoogleLogin} 
            className="w-full flex items-center justify-center gap-2 bg-[#7E33E0] text-white py-3 rounded-xl font-semibold font-lato hover:shadow-lg transition-shadow duration-200"
          >
            <RiGoogleFill className="w-5 h-5" /> Continue with Google
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="text-center pt-4 font-josefin"
          >
            <span className="text-[#6E7191]">New here? </span>
            <Button 
              onClick={() => router.push("/signUp")} 
              className="text-[#FB2E86] hover:underline font-semibold flex items-center justify-center gap-1 w-full"
            >
              <RiUserAddLine className="w-5 h-5" /> Create an account
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
