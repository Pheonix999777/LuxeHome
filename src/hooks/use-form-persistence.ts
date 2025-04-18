"use client";

import { useState, useEffect } from "react";

export function useFormPersistence<T>(formKey: string, initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedForm = localStorage.getItem(formKey);
    if (savedForm) {
      try {
        setFormState(JSON.parse(savedForm));
      } catch (error) {
        console.error(`Failed to parse saved form data for ${formKey}:`, error);
      }
    }
    setIsLoaded(true);
  }, [formKey]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(formKey, JSON.stringify(formState));
    }
  }, [formKey, formState, isLoaded]);

  const updateFormState = (newState: Partial<T>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  const clearFormState = () => {
    localStorage.removeItem(formKey);
    setFormState(initialState);
  };

  return {
    formState,
    updateFormState,
    clearFormState,
    isLoaded,
  };
}
