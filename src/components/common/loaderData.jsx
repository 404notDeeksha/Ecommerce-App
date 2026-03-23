import PropTypes from "prop-types";
import { BounceLoader } from "react-spinners";

export const LoaderData = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-blackTransparent flex items-center justify-center z-50">
          <BounceLoader
            color="#FFD814"
            loading={true}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};
const override = {
  display: "block",
  margin: "0 auto",
};

LoaderData.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
