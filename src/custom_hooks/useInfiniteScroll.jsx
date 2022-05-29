import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const useInfiniteScroll = () => {
  const {  posts } = useSelector((state) => state.posts);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastElementRef = useRef(null);
  const hasMorePosts = pageNumber <= Math.ceil(posts.length / 3);

  let interval;
  const handleObserver = (entries) => {
    const [target] = entries;

    if (target.isIntersecting && hasMorePosts) {
      setLoading(true);
      console.log(pageNumber, loading);
      interval = setTimeout(() => {
        setPageNumber((prev) => prev + 1);
        setLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    const reference = lastElementRef.current;
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });

    console.log(pageNumber, loading);
    if (reference) observer.observe(reference);

    return () => {
      if (interval) clearTimeout(interval);
      if (reference) observer.unobserve(reference);
    };
  }, [hasMorePosts, handleObserver]);

  return {
    hasMorePosts,
    loading,
    posts: posts?.slice(0, pageNumber * 3),
    lastElementRef,
  };
};
