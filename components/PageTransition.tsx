"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* 
         - 전체화면 fixed X
         - 그냥 motion.div만 만들어 children을 감싸고 
           opacity 0 → 1 → 0로만 부드럽게 전환
      */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // 불필요한 클래스는 제거하거나, 원한다면 layout 스타일만 남김
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
