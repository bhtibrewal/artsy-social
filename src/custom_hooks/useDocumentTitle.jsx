import { useEffect } from "react";

export const useDocumentTitle = (title = '') => {
  useEffect(() => {
    document.title = `Artsy Social ${title}`;
  }, []);
};
