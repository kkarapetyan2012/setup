import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const myButton = ({ children }) => <Button type="link">{children}</Button>;

myButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default myButton;
