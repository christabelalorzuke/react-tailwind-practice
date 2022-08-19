import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    firstName: yup.string().length(20).required,
    middleName: yup.string().length(20).required,
    lastName: yup.string().length(20).required,
    dateOfBirth: yup.date().required,
    gender: yup.string().oneOf(["male", "female"]).required,
    phoneNumber: yup.string().length(10).required,
    email: yup.string().email().required,
});

function Form() {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  console.log(data);

  const { register, handleSubmit, watch } = useForm({
    mode:"onSubmit",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch);

  return (
    <div className="h-screen bg-gradient-to-br from-fuchsia-900 to-green-900 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-gray-300 rounded-xl p-10">
        <div className="bg-yellow-600 text-white rounded-md items-center text-center px-2 py-2 m-10 ">
          {" "}
          REGISTRATION FORM
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-3">
            {/* creating a div to contain the firstName , MiddleName and LastName */}
            <div>
              <label htmlFor="firtsName" className="form-label">
                {" "}
                First Name :{" "}
              </label>
              <input
                type="text"
                {...register("firstName")}
                className="form-input"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="middleName" className="form-label">
                {" "}
                Middle Name :{" "}
              </label>
              <input
                type="text"
                {...register("middleName")}
                className="form-input"
                value={data.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">
                {" "}
                Last Name :{" "}
              </label>
              <input
                type="text"
                {...register("lastName")}
                className="form-input"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <label htmlFor="male " className="form-label">
              <input
                type="radio"
                {...register("male")}
                value="male "
                onChange={handleChange}
              />
              Male
            </label>
            <label htmlFor=" female " className="form-label">
              <input
                type="radio"
                {...register("female")}
                value="female "
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div>
            <label htmlFor=" dateOfBirth " className="form-label">
              {" "}
              Date of birth{" "}
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              value={data.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor=" phoneNumber " className="form-label">
              {" "}
              Phone Number{" "}
            </label>
            <input
              type="tel"
              {...register("phoneNumber")}
              placeholder=" xxx-xxx-xxxx "
              value={data.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder=" alorzuke2000@gamil.com "
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="bg-green-800 p-1 text-white mt-10 p-2 rounded-3xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
