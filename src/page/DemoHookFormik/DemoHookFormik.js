import { useFormik } from "formik";
import React from "react";
// import yup thủ công
import * as yup from "yup";

const DemoHookFormik = () => {
  const formRegister = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      pass: "",
      email: "",
    },
    onSubmit: (value) => {
      console.log("😢 ~ value", value);
      // form => gửi BE
      // Chỉ cần 1 trường có lỗi, sẽ ko gửi lên BE được
    },
    validationSchema: yup.object().shape({
      fullName: yup
        .string()
        .required("Không được để trống")
        .min(6, "Tên phải nhiều hơn 6 ký tự")
        .max(10, "tên phải ít hơn 10 ký tự"),
      // matches là một validation chứa chuỗi regex theo như những bài trước đã học, là trường hợp tổng hợp nhất cho các vali khác trong thư viện
      // matches(/nơi chứa chuối regex/, 'nội dung cần thông báo khi nhập sai')
      email: yup
        .string()
        .required("Email không được để trống")
        .email("Email không hợp lệ")
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email chưa hợp lệ"),
      phone: yup.number().typeError("Giá trị phải là một số"),
    }),
  });
  return (
    <div className="container m-auto">
      <form
        onSubmit={formRegister.handleSubmit}
        action=""
        className="border rounded p-3 space-y-4"
      >
        <h3 className="text-3xl font-bold">Form Register</h3>
        {/* Tên */}
        <div>
          <label htmlFor="" className="w-full text-xl block">
            Nhập tên
          </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="fullName"
            id="fullName"
            onChange={formRegister.handleChange}
          />
          <p className="text-red-600">{formRegister.errors.fullName}</p>
        </div>
        {/* phone */}
        <div>
          <label htmlFor="" className="w-full text-xl block">
            Nhập số điện thoại
          </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="phone"
            id="phone"
            onChange={formRegister.handleChange}
          />
          <p className="text-red-600">{formRegister.errors.phone}</p>
        </div>
        {/* pass */}
        <div>
          <label htmlFor="" className="w-full text-xl block">
            Nhập số pass
          </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="pass"
            id="pass"
            onChange={formRegister.handleChange}
          />
          <p className="text-red-600">{formRegister.errors.pass}</p>
        </div>
        {/* email */}
        <div>
          <label htmlFor="" className="w-full text-xl block">
            Nhập email
          </label>
          <input
            className="w-1/2 border rounded-lg p-2"
            type="text"
            name="email"
            id="email"
            onChange={formRegister.handleChange}
          />
          <p className="text-red-600">{formRegister.errors.email}</p>
        </div>
        {/* button */}
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoHookFormik;
