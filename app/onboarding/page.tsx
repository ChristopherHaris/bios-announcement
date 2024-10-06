"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "@reactuses/core";

export default function Onboarding() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  //   const nim = searchParams.get("nim");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      {showConfetti && <Confetti width={width} height={height} />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-4 overflow-hidden shadow-lg">
          <CardHeader className="bg-green-500 text-white p-6">
            <CardTitle className="text-3xl font-bold text-center">
              Selamat, {name}! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-2xl text-center text-gray-800 mb-4">
                Selamat Datang di BIOS Squad!
              </p>
              <p className="text-center text-gray-600">
                Kamu terpilih untuk menjadi bagian dari BIOS Squad.
              </p>
            </motion.div>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
