"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // 히스토리가 있으면 이전 페이지로 이동하고, 없으면 기본 경로로 이동
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 left-6 bg-white bg-opacity-50 text-black px-4 py-2 rounded-lg hover:bg-opacity-80 transition z-50"
    >
      ← Back
    </button>
  );
};

export default BackButton;
