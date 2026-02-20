export const TermsConditionsFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className=" text-xs text-center max-w-full  pt-2.5 pb-7
      leading-[18px]  bg-[#131A22] text-[#DDD]  "
    >
      {/* <ul className="flex flex-wrap justify-center ml-4">
        <li className="px-2.5">Conditions of Use &amp; Sale</li>
        <li className="px-2.5">Privacy Notice</li>
        <li className="px-2.5">Interest-Based Ads</li>
      </ul> */}
      <span>© {`${currentYear}`} Deeksha Sharma</span>
      <span>This is a demo ecommerce project built for learning purposes.</span>
      <span>No real payments are processed.</span>
    </div>
  );
};
