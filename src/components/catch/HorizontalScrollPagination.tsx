import React, { useRef, useState, useEffect } from 'react';
interface HorizontalScrollPaginationProps {
  onPageChange: (index: number) => void;
  children: React.ReactNode;
}
const HorizontalScrollPagination: React.FC<HorizontalScrollPaginationProps> = ({
  onPageChange,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  console.log(currentPage);

  useEffect(() => {
    const scrollHandler = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        updateCurrentPage();
      }, 150);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', scrollHandler);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', scrollHandler);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const updateCurrentPage = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth - 64;

    const newPage = Math.round(scrollLeft / width);
    setCurrentPage(newPage);
    scrollToPage(newPage);
    onPageChange(newPage);
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth - 64;
      scrollRef.current.scrollTo({
        left: (width + 16) * pageIndex + 8,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="tonggame-scroll-bar-none relative h-48 h-[396px] w-full overflow-x-scroll"
      ref={scrollRef}
      style={{
        paddingLeft: '32px',
        paddingRight: '32px',
        scrollbarWidth: 'none',
      }} // 设置容器的左侧 padding
    >
      <div className="flex h-full transition-transform duration-300">
        {children}
        <div style={{ width: '32px' }} />
      </div>
    </div>
  );
};

export default HorizontalScrollPagination;
