"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const fullText = "Coming Soon";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Show subtext after main text is complete
        setTimeout(() => setShowSubtext(true), 500);
      }
    }, 100); // 100ms delay between characters
    
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-8">
        {/* Circular headshot */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/headshot-ghibli.png"
            alt="Profile picture"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Coming soon message with typewriter effect */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <div className="h-14 flex items-center justify-center">
            {showSubtext && (
              <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
                My personal site is under construction. Stay tuned!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
