import { motion } from "framer-motion";

export default function AnimatedBorderButton({ children, onClick }) {
    return (
    <button
      onClick={onClick}
      className="
        relative w-[15rem] h-[4rem] rounded-xl 
        bg-white text-black font-medium
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* Border animated runner */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: "3px solid transparent",
          WebkitMask:
            "conic-gradient(from 0deg, transparent 0deg, black 20deg, transparent 40deg)",
          mask:
            "conic-gradient(from 0deg, transparent 0deg, black 20deg, transparent 40deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-xl border-[3px] border-blue-500"></div>
      </motion.div>

      <span className="text-[1.6rem] z-10">{children}</span>
    </button>
  );
}