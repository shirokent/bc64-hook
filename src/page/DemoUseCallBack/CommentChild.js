import React, { memo } from "react";

const CommentChild = (props) => {
  console.log("Child comment render");
  return (
    <div className="bg-black text-white p-4 text-3xl">
      CommentChild : {props.renderLike()}
    </div>
  );
};

export default memo(CommentChild);

// So sánh nông