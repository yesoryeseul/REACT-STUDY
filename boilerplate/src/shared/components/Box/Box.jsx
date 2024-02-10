import PropTypes from "prop-types";

const Box = ({ children, padding, margin, style }) => {
  return <div style={{ padding, margin, ...style }}>{children}</div>;
};

export default Box;

Box.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.string,
  margin: PropTypes.string,
  style: PropTypes.object,
};
