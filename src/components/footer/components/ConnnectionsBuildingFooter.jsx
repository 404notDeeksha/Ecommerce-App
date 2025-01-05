import {
  connectWithUs,
  getToKnowUs,
  letUsHelpYou,
  makeMoneyWithUs,
} from "../data/OtherServices";

export const ConnnectionsBuildingFooter = () => {
  return (
    <>
      <div
        className="table m-auto 
    max-w-[1000px] text-sm leading-5"
      >
        <div className="table-row">
          <ColumnFormatFill title="Get to Know Us" list={getToKnowUs} />
          <ColumnFormatBlank />
          <ColumnFormatFill title="Connect with Us" list={connectWithUs} />
          <ColumnFormatBlank />
          <ColumnFormatFill title="Make Money with Us" list={makeMoneyWithUs} />
          <ColumnFormatBlank />
          <ColumnFormatFill title="Let Us Help You" list={letUsHelpYou} />
        </div>
      </div>
    </>
  );
};

const ColumnFormatFill = ({ title, list }) => {
  return (
    <div
      className=" table-cell py-0 px-2.5 
      leading-[120%] align-top text-[#DDD] "
    >
      <div className=" font-bold text-[#FFF] mt-1.5 mb-3.5 text-base ">
        {title}
      </div>
      <ul>
        {list.map((ele) => {
          return (
            <li key={ele} className="mb-2.5">
              <a href="#">{ele}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const ColumnFormatBlank = () => {
  return <div className="w-[10%] px-2.5 table-cell"></div>;
};
