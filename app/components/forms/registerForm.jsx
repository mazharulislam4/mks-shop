"use client";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { isStrong } from "app/utils/utils";
import { Formik } from "formik";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { jwtDecode } from "node_modules/jwt-decode/build/cjs";
import { useState } from "react";
import { toast } from "react-toastify";
import ShortUniqueId from "short-unique-id";
import * as Yup from "yup";
import PasswordInput from "./passwordInput";
const Error = ({ error }) => {

  return error?.map((value, index) =>{
      if(value.path.includes('phone')){
        value.message = "This phone number is already taken";
      }
    return (
      <span className="inline-block pb-1  px-2" key={index}>
        {value?.message}
      </span>
    );
  });
};
// form validation
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Phone number required"),
  password: Yup.string()
    .required("Required")
    .test(
      "strong-password",
      "Password should be minimum 8 character and at least 1 symbol 1 uppercase  1 lowercase letters and a number.",
      (value) => isStrong(value)
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .test(
      "is-match-to-password",
      "Confirm password should math with password",
      (value, context) => {
        return context.parent.password === value;
      }
    ),
  checked: Yup.array()
    .min(1, "You must be agree with our terms and conditions")
    .required("You must have to be agree with our terms and conditions"),
});

// form
function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCPassVisible, setIsCPassVisible] = useState(false);
  const router = useRouter()
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleCPassVisibility = () => setIsCPassVisible(!isCPassVisible);

  const submitHandler = async (values) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const { firstName, lastName, email, phone, password } = values;
      console.log(values);
      const isUniqueName = async (count = 0) => {
        try {
          if (count > 0) {
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
          let username =
            firstName + "_" + new ShortUniqueId({ length: 4 }).randomUUID();
          const usernameRes = await fetch(
            baseUrl + `/users?filters[username][$eq]=${username}`
          );
          const usernameData = await usernameRes.json();
          if (usernameData?.error) {
            return null;
          }
          if (usernameData.length === 0) {
            return username;
          } else {
            return isUniqueName((count += 1));
          }
        } catch (err) {
          console.log(err);
          throw err;
        }
      };
      const username = await isUniqueName();

      // register post
      if (username) {
        const res = await fetch(baseUrl + "/auth/local/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            phone: phone,
            firstName: firstName,
            lastName: lastName,
          }),
        });
        const jsonRes = await res.json();
        // error handling
        if (jsonRes?.error && jsonRes.error.status == 400) {
          console.log(jsonRes.error);
          if (jsonRes.error.details.errors) {
            toast.error(<Error error={jsonRes.error.details.errors} />);
          } else {
            toast.error(jsonRes.error.message);
          }
        }

        // cookie set
        if (!jsonRes?.error) {
          const decodedJWT = jwtDecode(jsonRes.jwt);
          const encodeUser = btoa(
            JSON.stringify({
              username: jsonRes.user.username,
              email: jsonRes.user.email,
              phone: jsonRes.user.phone,
              firstName: jsonRes.user.firstName,
              lastName: jsonRes.user.lastName,
            })
          );
          const expireDay = Math.floor(
            (decodedJWT.exp - decodedJWT.iat) / 86400
          );
          console.log(expireDay);
console.log(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);
          Cookies.set(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, jsonRes.jwt, {
            expires: expireDay,
            path: '/'
          });

          sessionStorage.setItem("__User__", encodeUser);

          router.push('/')
        }
      }
    } catch (err) {
      console.log(err);
      return toast.error('There is an unexpected error. try again!');
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        checked: [],
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await submitHandler(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full   mx-auto gap-8">
              <Input
                label="First Name"
                variant="underlined"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="relative text-red-400 text-small top-[-25px]">
                  {errors.firstName}
                </span>
              )}
              <Input
                label="Last Name"
                variant="underlined"
                name="lastName"
                isRequired
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="relative text-red-400 text-small top-[-25px]">
                  {errors.lastName}
                </span>
              )}
              <Input
                label="Email"
                variant="underlined"
                isRequired
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="relative text-red-400 text-small top-[-25px]">
                  {errors.email}
                </span>
              )}
              <Input
                label="Phone"
                variant="underlined"
                isRequired
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="relative text-red-400 text-small top-[-25px]">
                  {errors.phone}
                </span>
              )}
              <PasswordInput
                label="Password"
                variant="underlined"
                isRequired
                name="password"
                onChange={handleChange}
                value={values.password}
                toggleVisibility={toggleVisibility}
                isVisible={isVisible}
                type={isVisible ? "text" : "password"}
              />
              {errors.password && (
                <span className="relative text-red-400 text-small top-[-25px]">
                  {errors.password}
                </span>
              )}
              <PasswordInput
                label="Confirm Password"
                variant="underlined"
                isRequired
                isVisible={isCPassVisible}
                type={isCPassVisible ? "text" : "password"}
                name="confirmPassword"
                toggleVisibility={toggleCPassVisibility}
                onChange={handleChange}
                value={values.confirmPassword}
              />
            </div>
            {errors.confirmPassword && (
              <span className="relative text-red-400 text-small top-[5px]">
                {errors.confirmPassword}
              </span>
            )}
            <div className="mt-4">
              <Checkbox
                defaultChecked
                size="md"
                isRequired
                classNames={{
                  icon: "text-black",
                }}
                name="checked"
                onChange={handleChange}
                value={"agree"}
              >
                I agree with Privacy Policy and Terms of Use
              </Checkbox>
              {errors.checked && (
                <span className="relative text-red-400 text-small top-[5px] block">
                  {errors.checked}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="w-full mt-8 bg-black text-white rounded-[5px]"
            >
              Login
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
