"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormPersistence } from "@/hooks/use-form-persistence";
import { toast } from "@/hooks/toast";
import { Eye, EyeOff } from "lucide-react";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

interface SignInFormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export function AuthDialog({
  isOpen,
  onClose,
  initialMode = "signin",
}: AuthDialogProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sign In form state
  const {
    formState: signInState,
    updateFormState: updateSignInState,
    clearFormState: clearSignInState,
  } = useFormPersistence<SignInFormState>("signin-form", {
    email: "",
    password: "",
    rememberMe: false,
  });

  // Sign Up form state
  const {
    formState: signUpState,
    updateFormState: updateSignUpState,
    clearFormState: clearSignUpState,
  } = useFormPersistence<SignUpFormState>("signup-form", {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateSignInState({
      [name]: type === "checkbox" ? checked : value,
    } as Partial<SignInFormState>);
  };

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateSignUpState({
      [name]: type === "checkbox" ? checked : value,
    } as Partial<SignUpFormState>);
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!signInState.email || !signInState.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!signInState.rememberMe) {
        clearSignInState();
      }

      toast({
        title: "Success",
        description: "You have successfully signed in",
      });

      onClose();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while signing in",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !signUpState.name ||
      !signUpState.email ||
      !signUpState.password ||
      !signUpState.confirmPassword
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (signUpState.password !== signUpState.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!signUpState.acceptTerms) {
      toast({
        title: "Error",
        description: "You must accept the terms and conditions",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      clearSignUpState();

      toast({
        title: "Success",
        description: "Your account has been created successfully",
      });

      setMode("signin");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while creating your account",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "signin" ? "Sign In" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        {mode === "signin" ? (
          <form onSubmit={handleSignInSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <Input
                id="signin-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={signInState.email}
                onChange={handleSignInChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <div className="relative">
                <Input
                  id="signin-password"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  placeholder="••••••••"
                  value={signInState.password}
                  onChange={handleSignInChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
                  checked={signInState.rememberMe}
                  onChange={handleSignInChange}
                />
                <Label htmlFor="remember-me" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <a
                href="#"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-neutral-600">
                Don&apos;t have an account?{" "}
              </span>
              <button
                type="button"
                className="text-neutral-900 font-medium hover:underline"
                onClick={toggleMode}
              >
                Sign up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Full Name</Label>
              <Input
                id="signup-name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={signUpState.name}
                onChange={handleSignUpChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={signUpState.email}
                onChange={handleSignUpChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  placeholder="••••••••"
                  value={signUpState.password}
                  onChange={handleSignUpChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "password" : "text"}
                  placeholder="••••••••"
                  value={signUpState.confirmPassword}
                  onChange={handleSignUpChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="accept-terms"
                name="acceptTerms"
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
                checked={signUpState.acceptTerms}
                onChange={handleSignUpChange}
                required
              />
              <Label htmlFor="accept-terms" className="text-sm font-normal">
                I agree to the{" "}
                <a href="/terms" className="text-neutral-900 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-neutral-900 hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create Account"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-neutral-600">
                Already have an account?{" "}
              </span>
              <button
                type="button"
                className="text-neutral-900 font-medium hover:underline"
                onClick={toggleMode}
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
