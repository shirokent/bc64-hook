// rafc

import React from "react";
import { updateUserCommentAction } from "../../redux/reducer/CommentReducer";
import { useDispatch } from "react-redux";

const ComentRedux = () => {
  let dispatch = useDispatch();

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    // console.log("😢 ~ name", name);
    // console.log("😢 ~ value", value);
    const payload = {
      name: name, // Tên trường đang nhập
      value: value, // giá trị trường đang nhập
    };

    let action = updateUserCommentAction(payload);

    dispatch(action);
  };

  const handleSendComment = () => {
    
  };

  return (
    <div className="container mx-auto space-y-10">
      <h3>Ứng dụng bình luận</h3>
      {/* Chứa bình luận */}
      {/* Binding ra arr comment */}
      <div className="border rounded p-3">
        <div className="flex space-x-5 bg-gray-300 p-1 rounded-lg">
          <img src="https://i.pravatar.cc?u=50" alt="" width={50} />
          <div>
            <p>Tên</p>
            <p>Content abcxyz</p>
          </div>
        </div>
      </div>
      {/* Gửi bình luận */}
      <div className="border rounded p-3 space-y-1">
        <div>
          <label className="w-full text-2xl font-medium">Nhập tên</label>
          <input
            name="name"
            onInput={handleChangeValue}
            className="border w-full border-blue-400"
            type="text"
          />
        </div>

        <div>
          <label className="w-full text-2xl font-medium">Content</label>
          <input
            name="content"
            onInput={handleChangeValue}
            className="border w-full border-blue-400"
            type="text"
          />
        </div>
        <button
          onClick={() => {
            handleSendComment();
          }}
          className="bg-green-500 text-white rounded-lg p-2"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ComentRedux;
