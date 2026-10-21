import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  emptyPause?: number;
  className?: string;
  cursorClassName?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDelay = 2200,
  emptyPause = 450,
  className = '',
  cursorClassName = ''
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrentText(words[0]);
      return;
    }

    const currentWord = words[wordIndex % words.length];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, emptyPause);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay, emptyPause]);

  const activeWord = words && words.length > 0 ? words[wordIndex % words.length] : '';
  const isTypingOrDeleting = 
    (!isDeleting && currentText.length > 0 && currentText.length < activeWord.length) ||
    (isDeleting && currentText.length > 0);

  return (
    <span
      className={`inline-flex items-center min-h-[1.75rem] sm:min-h-[2rem] ${className}`}
      aria-label={activeWord}
    >
      <span aria-hidden="true">{currentText}</span>
      <span
        aria-hidden="true"
        className={`inline-block w-[2px] sm:w-[2.5px] h-5 sm:h-6 ml-1 bg-blue-600 dark:bg-blue-400 rounded-sm self-center ${
          isTypingOrDeleting ? 'opacity-100' : 'animate-cursor'
        } ${cursorClassName}`}
      />
    </span>
  );
};

