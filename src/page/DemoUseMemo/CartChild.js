import React, { memo } from "react";

const CartChild = () => {
  console.log("render cart child");
  return <div>CartChild</div>;
};

export default memo(CartChild);
