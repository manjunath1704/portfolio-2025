import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold text-blue-600"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
