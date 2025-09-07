"use client";
import { wasteCat } from "@/utils/facts";
import { createContext, useContext, useEffect, useState } from "react";

const TrackerContext = createContext();
export const useTracker = () => useContext(TrackerContext);

export default function TrackerProvider({ children }) {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: Date.now(),
    item: "",
    qty: "",
    category: wasteCat[0].id,
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("entryLocal"));
    if (storedData) {
      setData(Array.isArray(storedData) ? storedData : [storedData]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entryLocal", JSON.stringify(data));
  }, [data]);

  return (
    <TrackerContext.Provider value={{ data, setData, formData, setFormData }}>
      {children}
    </TrackerContext.Provider>
  );
}
