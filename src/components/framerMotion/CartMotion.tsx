"use client";
import { motion } from "framer-motion";

const CartMotion = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: delay * 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default CartMotion;
