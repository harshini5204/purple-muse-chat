import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex w-full justify-start animate-fade-in">
      <div className="bg-ai-message border border-border rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: "300ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: "600ms" }} />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
