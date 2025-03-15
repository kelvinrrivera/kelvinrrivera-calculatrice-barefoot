"use client";

import { useState } from "react";

interface InputFieldProps {
  type?: "text" | "email" | "number" | "password";
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  min?: number;
  max?: number;
  required?: boolean;
  className?: string;
  unit?: string;
}

export default function InputField({
  type = "text",
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  min,
  max,
  required = false,
  className = "",
  unit,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className={`${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className={`relative ${isFocused ? 'ring-2 ring-barefoot-blue/20 rounded-lg' : ''}`}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 ${unit ? 'pr-12' : ''} bg-white border ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:border-barefoot-blue outline-none transition-all`}
        />
        
        {unit && (
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            {unit}
          </span>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {type === "number" && (min !== undefined || max !== undefined) && (
        <p className="mt-1 text-xs text-gray-500">
          {min !== undefined && max !== undefined
            ? `Valeur entre ${min} et ${max}`
            : min !== undefined
            ? `Valeur minimale: ${min}`
            : `Valeur maximale: ${max}`}
        </p>
      )}
    </div>
  );
}
