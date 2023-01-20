import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useTabRouter = (
  defaultValue: string
): { activeTab: string; handleTabChange: (tab: string) => void } => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const navigate = useNavigate();
  const location = useLocation();
  const handleTabChange = (tab: string): void => {
    navigate(tab);
  };

  useEffect(() => {
    setActiveTab(location.pathname.split("/")[1]);
  }, [location.pathname]);

  return { activeTab, handleTabChange };
};

export default useTabRouter;
