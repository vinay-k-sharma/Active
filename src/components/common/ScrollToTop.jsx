import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrolling = () => {
    const header = document.getElementById("header");
    if (header) {
      const shouldShow = window.scrollY > header.offsetHeight;
      console.log("Should show ScrollToTop:", shouldShow);
      setScrollToTop(shouldShow);
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    handleScrolling()
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  const scrollToTopAction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollToTop && (
        <div
          className='flex items-center justify-center bg-[#34BF49] size-[40px] fixed right-4 bottom-4 z-50 cursor-pointer'
          onClick={scrollToTopAction}>
          <FaArrowUp className='text-white text-sm'/>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
