"use client";

import React from "react";

interface EmailFormProps {
  formData: {
    userName: string;
    userEmail: string;
    consent: boolean;
  };
  setFormData: (data: Partial<{
    userName: string;
    userEmail: string;
    consent: boolean;
  }>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
  error: string;
}

export default function EmailForm({
  formData,
  setFormData,
  handleSubmit,
  isLoading,
  error,
}: EmailFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-700"
        >
          Prénom
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ userName: e.target.value })
          }
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-barefoot-blue focus:border-barefoot-blue"
          placeholder="Votre prénom"
        />
      </div>
      <div>
        <label
          htmlFor="userEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={(e) =>
            setFormData({ userEmail: e.target.value })
          }
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-barefoot-blue focus:border-barefoot-blue"
          placeholder="votre.email@exemple.com"
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ consent: e.target.checked })
            }
            required
            className="focus:ring-barefoot-blue h-4 w-4 text-barefoot-blue border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="consent"
            className="font-medium text-gray-700"
          >
            J'accepte de recevoir mon guide personnalisé et les conseils de Minimalistes par email. Je peux me désinscrire à tout moment.
          </label>
        </div>
      </div>
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-barefoot-blue hover:bg-barefoot-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barefoot-blue transition-colors"
        >
          {isLoading ? "Envoi en cours..." : "Recevoir mon guide"}
        </button>
      </div>
    </form>
  );
}

