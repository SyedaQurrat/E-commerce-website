 'use client';


import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../../lib/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { RiUserLine, RiMailLine, RiLockPasswordLine, RiArrowRightLine } from "react-icons/ri";

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });

      // Save user data in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
        lastLogin: new Date()
      });

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />

      {/* Signup Section */}
      <div className="flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7E33E0]/10 rounded-full blur-xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FB2E86]/10 rounded-full blur-xl" />

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
            {/* Header Section */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#7E33E0] font-lato">Create Account</h1>
              <p className="text-[#6E7191] font-josefin">Join our community today</p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Name Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }} className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
                  <RiUserLine className="text-[#7E33E0] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
                  <RiUserLine className="text-[#7E33E0] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]"
                    required
                  />
                </motion.div>
              </div>

              {/* Email Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
                <RiMailLine className="text-[#7E33E0] w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]"
                  required
                />
              </motion.div>

              {/* Password Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-[#EEEFFB]">
                <RiLockPasswordLine className="text-[#7E33E0] w-5 h-5" />
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none font-josefin placeholder:text-[#A0A3BD]"
                  required
                  minLength={6}
                />
              </motion.div>

              {/* Signup Button */}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-gradient-to-r from-[#7E33E0] to-[#FB2E86] text-white py-3 rounded-xl font-semibold font-lato hover:shadow-lg transition-shadow duration-200 flex items-center justify-center gap-2">
                Create Account
                <RiArrowRightLine className="w-5 h-5" />
              </motion.button>
            </form>

            {/* Login Link */}
            <motion.div className="text-center pt-4 font-josefin text-[#6E7191]">
              Already registered? {" "}
              <button onClick={() => router.push("/login")} className="text-[#7E33E0] hover:underline font-semibold">
                Sign in here
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUpPage;
