import PropTypes from "prop-types";

const Spacer = ({ size, axis, style = {}, ...delegated }) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};
export default Spacer;

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  axis: PropTypes.oneOf(["horizontal", "vertical"]),
  style: PropTypes.object,
  delegated: PropTypes.object,
};
