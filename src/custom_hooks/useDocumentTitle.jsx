import { useEffect } from "react";

export const useDocumentTitle = (title = '') => {
  useEffect(() => {
    document.title = `Artsy Talk ${title}`;
  }, []);
};
