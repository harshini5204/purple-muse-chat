import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-fade-in-up",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-user-message text-primary-foreground"
            : "bg-ai-message text-foreground border border-border"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
