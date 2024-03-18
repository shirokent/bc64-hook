import React, { useCallback, useState } from "react";
import CommentChild from "./CommentChild";

// Một trong những kiến trúc có thể được hỏi khi đi phỏng vấn

const DemoUseCallBack = () => {
  const [like, setLike] = useState(0);
  const [number, setnumber] = useState(0);
  const renderLike = () => {
    return `like ${like}`;
  };
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container mx-auto">
      <p className="text-2xl">Number :{number}</p>
      <button
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        Tăng number
      </button>

      <p className="text-2xl">Like :{like}</p>
      <button
        className="bg-red-500 text-white rounded-md p-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng like
      </button>
      <CommentChild renderLike={callBackRenderLike} />
    </div>
  );
};

export default DemoUseCallBack;
