"use client";

import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const textToType = texts[currentTextIndex];

    // Typing effect
    if (isTyping) {
      if (currentText.length < textToType.length) {
        const timeout = setTimeout(() => {
          setCurrentText(textToType.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }
    } 
    // Deleting effect
    else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="inline-block">
      <span className="text-white">{currentText}</span>
      <span className={`h-full w-[2px] bg-yellow-400 inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </div>
  );
};

export default TypingAnimation;