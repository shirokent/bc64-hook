import React, { useRef, useState } from "react";

// useRef thường dùng để lưu lại giá trị mỗi lần render
const DemoUseRef = () => {
  //   const [state, setState] = useState({
  //     name: "",
  //     content: "",
  //   });

  //   let userComment = {
  //     name: "",
  //     content: "",
  //   };

  let refComment = useRef({ name: "", content: "" });

  let domTextRef = useRef();
  let refButton = useRef();

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    // setState({
    // ...state,
    // [name]: value
    // })
    // userComment[name] = value;
    refComment.current[name] = value;
    // console.log("😢 ~ refComment", refComment);
  };

  const handleSendComment = () => {
    // console.log("refComment", refComment);
    // Ngoài ra ref cũng dùng để dom đến các thẻ thông qua hook useRef
    domTextRef.current.className = "bg-black text-white";

    domTextRef.current.style.fontsize = "50px";

    refButton.current.className = "bg-red-500 text-white";
  };

  return (
    <div className="container mx-auto space-y-10">
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
          ref={refButton}
          onClick={handleSendComment}
          className="bg-green-500 text-white rounded-lg p-2"
        >
          SEND
        </button>
        <h3 ref={domTextRef}>Hello bc64</h3>
      </div>
    </div>
  );
};

export default DemoUseRef;
