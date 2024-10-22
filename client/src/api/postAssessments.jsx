import { useState } from "react";
import axios from "axios";

const useCreateAssessment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createAssessment = async (newAssessment) => {
    const URL = import.meta.env.VITE_APP_API_BASE_URL;
    setError(null);

    try {
      const response = await axios.post(`${URL}/assessments`, newAssessment);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Error creating assessment:", err);
      return null;
    }
  };

  return { createAssessment, loading, error };
};

export default useCreateAssessment;
