"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function NiceTry() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-auto sm:mx-4 sm:max-w-lg overflow-hidden shadow-lg">
          <CardHeader className="bg-red-500 text-white p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
              Nice Try 👍
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-lg sm:text-2xl font-bold text-center text-gray-800 mb-4">
                Maaf, tapi kamu belum terpilih menjadi bagian dari BIOS Squad
              </p>
              <p className="text-center text-gray-600">
                Tapi jangan sedih, kamu masih bisa coba lagi tahun depan!
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
              <div className="rounded-full bg-red-100 p-3">
                <X className="h-10 sm:h-12 w-10 sm:w-12 text-red-500" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
