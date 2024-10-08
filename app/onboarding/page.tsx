"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useWindowSize } from "@reactuses/core";
import { useSearchParams } from "next/navigation";

function OnboardingContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const division = searchParams.get("division");

  return (
    <>
      <Card className="w-full max-w-md mx-auto sm:mx-4 sm:max-w-lg overflow-hidden shadow-lg">
        <CardHeader className="bg-green-500 text-white p-4 sm:p-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
            Congrats, {name}! 🎉
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-4">
              Welcome to BIOS Squad!
            </p>
            <p className="text-center text-gray-600">
              Kamu terpilih untuk menjadi bagian dari{" "}
              <span className="font-bold">{division}</span>.
            </p>
          </motion.div>
          <motion.div
            className="mt-6 sm:mt-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-16 w-12 sm:w-16 text-green-500"
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
    </>
  );
}

// Main component with Suspense to handle loading state
export default function Onboarding() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

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
        <Suspense fallback={<div>Loading...</div>}>
          <OnboardingContent />
        </Suspense>
      </motion.div>
    </div>
  );
}
