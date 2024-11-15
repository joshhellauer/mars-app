"use client";
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {}, // Data for Stage 1
    travel: {},   // Data for Stage 2
    health: {},   // Data for Stage 3
  });

  const updateFormData = (stage, data) => {
    setFormData((prev) => ({
      ...prev,
      [stage]: { ...prev[stage], ...data },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
