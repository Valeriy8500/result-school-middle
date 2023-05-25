import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = ({ page }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (page === "home") {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, []);

  return (<h1 className={page ? "not-found-default" : "not-found"}>Not found</h1>)
};

export default NotFound;