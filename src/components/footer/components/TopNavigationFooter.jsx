export const TopNavigationFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="navFooterBackToTop  " onClick={scrollToTop}>
      <span className="text-[13px] ">Back to top</span>
    </div>
  );
};
