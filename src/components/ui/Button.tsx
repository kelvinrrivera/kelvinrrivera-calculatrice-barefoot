"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  fullWidth = false,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50";
  
  const variantClasses = {
    primary: "bg-barefoot-blue text-white hover:bg-barefoot-dark shadow-sm hover:shadow-md",
    outline: "border border-barefoot-blue text-barefoot-blue hover:bg-barefoot-blue/5",
    text: "text-barefoot-blue hover:bg-barefoot-blue/5",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5";
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
