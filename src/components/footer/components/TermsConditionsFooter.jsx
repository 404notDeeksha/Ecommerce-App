export const TermsConditionsFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className=" text-xs text-center max-w-full  pt-2.5 pb-7
      leading-[18px]  bg-[#131A22] text-[#DDD]  "
    >
      <div>© {`${currentYear}`} Deeksha Sharma</div>
      <div>This is a demo ecommerce project built for learning purposes.</div>
      <div>No real payments are processed.</div>
    </div>
  );
};
