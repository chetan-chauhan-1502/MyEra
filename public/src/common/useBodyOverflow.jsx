import { useEffect }  from 'react'

const useBodyOverflow = (condition) => {
    useEffect(() => {
      if (condition) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      // Cleanup function to reset overflow when component is unmounted
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [condition]);
  };

export default useBodyOverflow
