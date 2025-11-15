import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end p-6 md:pl-70">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        {/* Profile Card */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your profile details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" className="border-border">
                <Edit className="h-4 w-4 mr-2" />
                Change Avatar
              </Button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  defaultValue="John Doe"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  defaultValue="john.doe@example.com"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  placeholder="Tell us about yourself"
                  defaultValue="AI enthusiast and tech explorer"
                  className="bg-background border-border"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="bg-primary hover:bg-primary/90">
                Save Changes
              </Button>
              <Button variant="outline" className="border-border">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold text-primary">127</p>
                <p className="text-sm text-muted-foreground mt-1">Total Conversations</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold text-accent">45</p>
                <p className="text-sm text-muted-foreground mt-1">This Month</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold text-primary">12h</p>
                <p className="text-sm text-muted-foreground mt-1">Time Saved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
