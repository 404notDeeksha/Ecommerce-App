export const TopNavigationFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="mb-10 bg-[#37475A] text-center py-[15px] leading-[17px] cursor-pointer  "
      onClick={scrollToTop}
    >
      <span className="text-[13px] ">Back to top</span>
    </div>
  );
};
