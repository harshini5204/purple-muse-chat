import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end p-6 md:pl-70">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Customize your AI assistant experience</p>
        </div>

        {/* Appearance Settings */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the app looks and feels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme">Theme</Label>
                <p className="text-sm text-muted-foreground">Select your preferred theme</p>
              </div>
              <Select defaultValue="light">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-sm text-muted-foreground">Enable smooth animations</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Chat Settings */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Chat Preferences</CardTitle>
            <CardDescription>Configure your chat experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sound">Sound Effects</Label>
                <p className="text-sm text-muted-foreground">Play sounds for new messages</p>
              </div>
              <Switch id="sound" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="typing">Typing Indicator</Label>
                <p className="text-sm text-muted-foreground">Show when AI is typing</p>
              </div>
              <Switch id="typing" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="timestamps">Message Timestamps</Label>
                <p className="text-sm text-muted-foreground">Display time on messages</p>
              </div>
              <Switch id="timestamps" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Privacy & Data</CardTitle>
            <CardDescription>Manage your data and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="save-history">Save Chat History</Label>
                <p className="text-sm text-muted-foreground">Keep your conversations saved</p>
              </div>
              <Switch id="save-history" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics">Usage Analytics</Label>
                <p className="text-sm text-muted-foreground">Help improve the experience</p>
              </div>
              <Switch id="analytics" defaultChecked />
            </div>

            <div className="pt-4 border-t border-border">
              <Button variant="destructive" className="w-full">
                Clear All Chat History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-border">
            Reset to Defaults
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
