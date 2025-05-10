"use client";

import { useEffect, useState } from "react";
import academyData from "@/data/Academydata.json";
import { motion } from "framer-motion";
import AcademyCard from "./academycard";

// Define the program type
interface AcademyProgram {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function AcademyPage() {
  const [programs, setPrograms] = useState<AcademyProgram[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  interface AcademyData {
  academyPrograms: AcademyProgram[];
}
  const academyDataTyped = academyData as AcademyData;


 useEffect(() => {
  // Simulate fetching data from an API
  setTimeout(() => {
    setPrograms(academyDataTyped.academyPrograms);
    setIsLoading(false);
  }, 500);
}, [academyDataTyped.academyPrograms]); // Added dependency

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl pt-15">
            Academy Programs
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Comprehensive training programs designed to develop security professionals with cutting-edge skills and knowledge.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center"
          >
            {programs.map((program) => (
              <AcademyCard key={program.id} program={program} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}