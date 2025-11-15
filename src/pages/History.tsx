import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHistory {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  messageCount: number;
}

const mockHistory: ChatHistory[] = [
  {
    id: "1",
    title: "Project Planning Discussion",
    preview: "Let's discuss the timeline for the new feature...",
    timestamp: "2 hours ago",
    messageCount: 24,
  },
  {
    id: "2",
    title: "Code Review Questions",
    preview: "Can you help me understand this React pattern...",
    timestamp: "Yesterday",
    messageCount: 18,
  },
  {
    id: "3",
    title: "Design Feedback",
    preview: "I'd like your thoughts on this UI design...",
    timestamp: "2 days ago",
    messageCount: 32,
  },
  {
    id: "4",
    title: "Technical Documentation",
    preview: "Help me write documentation for the API...",
    timestamp: "3 days ago",
    messageCount: 15,
  },
  {
    id: "5",
    title: "Bug Investigation",
    preview: "There's a strange behavior in the application...",
    timestamp: "1 week ago",
    messageCount: 41,
  },
];

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end p-6 md:pl-70">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Chat History</h1>
          <p className="text-muted-foreground">Browse your previous conversations</p>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {mockHistory.map((chat) => (
            <Card
              key={chat.id}
              className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        {chat.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                        {chat.preview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {chat.timestamp}
                        </span>
                        <span>{chat.messageCount} messages</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (hidden when there's history) */}
        {mockHistory.length === 0 && (
          <Card className="border-border">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No conversations yet</h3>
              <p className="text-muted-foreground">
                Start chatting to see your conversation history here
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default History;
