import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ itemOne,itemTwo}) => {
  return (
    <>
      <h2>This is a dummy Component</h2>
      <h3>This is the value of propertyA</h3>
      { itemOne }
      <h3>This is the value of propertyB</h3>
      { itemTwo }
      <h3>
        test with travis build on the example branch
      </h3>
    </>
  );
};

MyComponent.propTypes = {
  itemOne: PropTypes.string,
  itemTwo: PropTypes.string,
};

MyComponent.defaultProps = {
  itemOne: "PropA",
  itemTwo: "PropB",
};

export default MyComponent