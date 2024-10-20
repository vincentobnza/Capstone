import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAssessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAssessments = async () => {
    const URL = import.meta.env.VITE_APP_API_BASE_URL;
    try {
      const { data } = await axios.get(`${URL}/assessments`);
      setAssessments(data);
    } catch (err) {
      console.error("Error fetching assessments:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAssessments();
  }, []);

  return { assessments, loading };
};

export default useFetchAssessments;
