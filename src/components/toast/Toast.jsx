import "./toast.css";
import { useToast } from "../../contexts";
import { useEffect } from "react";
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaCheckCircle,
  IoCloseCircleOutline
} from "../../assets/icons";

export const Toast = ({ position }) => {
  const { toastList, deleteToast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) deleteToast(toastList[0].id);
    }, 3000);
    return () => clearInterval(interval);
  }, [toastList]);
  const getIcon = (type) => {
    switch (type) {
      case "primary":
        return <FaInfoCircle />;
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaExclamationCircle />;
    }
  };
  return (
    <div className={`toast-container ${position}`}>
      {toastList.map((toast) => {
        const { title, type, id } = toast;
        return (
          <div key={id} className={`toast toast-${type} `}>
            <div className={` toast-icon`}>{getIcon(type)}</div>
            <span className="toast-title">{title}</span>
            <button
              className="btn toast-close-btn"
              onClick={() => deleteToast(id)}
            >
             <IoCloseCircleOutline />
            </button>
          </div>
        );
      })}
    </div>
  );
};
