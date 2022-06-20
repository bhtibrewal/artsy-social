import { useEffect } from "react";

let listenerCallbacks = new WeakMap();

let observer;

function handleIntersections(entries) {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        console.log(listenerCallbacks, cb)
        cb();
      }
    }
  });
}

export const useIntersectionObserver = (elementRef, callback) => {
  useEffect(() => {
    let target = elementRef.current;
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: "100px",
      threshold: "0.5",
    });

    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
};
