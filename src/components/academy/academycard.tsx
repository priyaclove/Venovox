"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, BarChart2, UserCheck, AlertTriangle, 
  Lock, AlertOctagon, Eye, Users, Truck, Search,
  Calendar, Cpu, MessageCircle, Plane, ShoppingBag,
  Home, Anchor, Clipboard, UserPlus, AlertCircle
} from "lucide-react";

interface AcademyProgram {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface AcademyCardProps {
  program: AcademyProgram;
}

export default function AcademyCard({ program }: AcademyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Map icon string to actual icon component
  const getIcon = (iconName: string) => {
    const iconComponents: Record<string, React.ReactNode> = {
      "shield-lock": <Shield className="w-12 h-12" />,
      "bar-chart": <BarChart2 className="w-12 h-12" />,
      "user-shield": <UserPlus className="w-12 h-12" />,
      "alert-triangle": <AlertTriangle className="w-12 h-12" />,
      "user-check": <UserCheck className="w-12 h-12" />,
      "lock": <Lock className="w-12 h-12" />,
      "alert-octagon": <AlertOctagon className="w-12 h-12" />,
      "shield": <Shield className="w-12 h-12" />,
      "eye": <Eye className="w-12 h-12" />,
      "users": <Users className="w-12 h-12" />,
      "truck": <Truck className="w-12 h-12" />,
      "search": <Search className="w-12 h-12" />,
      "calendar": <Calendar className="w-12 h-12" />,
      "cpu": <Cpu className="w-12 h-12" />,
      "message-circle": <MessageCircle className="w-12 h-12" />,
      "plane": <Plane className="w-12 h-12" />,
      "shopping-bag": <ShoppingBag className="w-12 h-12" />,
      "home": <Home className="w-12 h-12" />,
      "anchor": <Anchor className="w-12 h-12" />,
      "clipboard": <Clipboard className="w-12 h-12" />,
    };

    return iconComponents[iconName] || <AlertCircle className="w-12 h-12" />;
  };

  // Get color classes based on color string
  const getColorClasses = (color: string) => {
    const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
      "red": { 
        bg: "bg-red-600", 
        text: "text-red-600", 
        border: "border-red-600" 
      },
      "black": { 
        bg: "bg-gray-900", 
        text: "text-gray-900", 
        border: "border-gray-900" 
      },
      "gray": { 
        bg: "bg-gray-600", 
        text: "text-gray-600", 
        border: "border-gray-600" 
      }
    };

    return colorClasses[color] || colorClasses["red"];
  };

  const colors = getColorClasses(program.color);

  return (
    <div className="m-4 perspective-1000" style={{ perspective: "1000px", width: "380px", height: "320px" }}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
        style={{ transformStyle: "preserve-3d" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleFlip}
      >
        {/* Front Face */}
        <motion.div
          className={`absolute inset-0 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center backface-hidden bg-white border-2 ${colors.border}`}
          style={{ backfaceVisibility: "hidden" }}
          animate={{ 
            scale: isHovered && !isFlipped ? 1.03 : 1,
            boxShadow: isHovered && !isFlipped ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div className={`rounded-full p-4 ${colors.bg} bg-opacity-10 mb-4`}>
            <div className={colors.text}>
              {getIcon(program.icon)}
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-2">{program.title}</h3>
          <p className="text-sm text-gray-500 text-center line-clamp-3">
            {program.description.slice(0, 100)}...
          </p>
          <motion.button
            className={`mt-4 px-4 py-2 rounded-full ${colors.bg} text-white text-sm font-medium`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Back Face */}
        <motion.div
          className={`absolute inset-0 rounded-lg shadow-lg p-6 flex flex-col backface-hidden bg-white border-2 ${colors.border}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          animate={{ 
            scale: isHovered && isFlipped ? 1.03 : 1,
            boxShadow: isHovered && isFlipped ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{program.title}</h3>
          <div className="text-sm text-gray-700 flex-grow overflow-auto pr-2">
            {program.description}
          </div>
          <div className="flex justify-between items-center mt-4">
            <motion.button
              className={`px-4 py-2 rounded-full ${colors.bg} text-white text-sm font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full border ${colors.border} ${colors.text} text-sm font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Flip Back
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}