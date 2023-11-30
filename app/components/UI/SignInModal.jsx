"use client";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

//PAZI NA LOZINKU MORA SE HASH-UJE U JWT-u!!!
//VERIFIKACIJA REGEX!!!
// Nije jos responzivno

function SignInModal({ onClose, signUp }) {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
    date: "",
    profileImage: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    password: "",
  });
  //regex validators
  const userNameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function validateInput(name) {
    switch (name) {
      case "userName":
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          userName: userNameRegex.test(user.userName)
            ? ""
            : `Duzina korisnickog imena mora biti izmedju 3 i 20 karaktera.`,
        }));
        break;
      case "password":
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          password: passwordRegex.test(user.password)
            ? ""
            : `Lozinka mora da ima bar jedno veliko i malo slovo, minimum 8 karaktera, broj i bar jedan specijalni karakter`,
        }));
        break;
      default:
        break;
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Object.entries(user).map(([name, attr]) => {
      validateInput(name);
    });
    //mutacija ide ovde
    if (Object.values(validationErrors).some((error) => error !== "")) {
      // Handle validation errors (you may display an alert or any other logic)
      console.log("Form has validation errors");
      return;
    }
    setUser({
      userName: "",
      password: "",
      email: "",
    });
    onClose();
  }

  return (
    <div className="p-4 w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] top-[-2em] shadow text-white bg-gray-900 rounded-xl relative">
  <div className="flex mx-10 justify-between">
    <h1 className="text-3xl font-semibold"> Sign In </h1>
    <Button onClick={onClose} className="rounded-full py-4">
      <AiOutlineClose className="text-l font-bold" />
    </Button>
  </div>
  <form
    className="flex h-auto gap-2 flex-col align-middle justify-center mx-10 mb-10"
    onSubmit={handleSubmit}
  >
    <Input
      heading={"User Name:"}
      placeholder={"Enter your user name..."}
      type={"text"}
      name={"userName"}
      value={user.userName}
      onChange={handleInputChange}
      validationError={validationErrors.userName}
      required
    />
    <Input
      heading={"Password:"}
      placeholder={"Enter your password..."}
      type={"password"}
      name={"password"}
      value={user.password}
      onChange={handleInputChange}
      validationError={validationErrors.password}
      required
    />
    <div className="absolute w-full flex justify-left bottom-20">
      <h2 className="py-3 px-2"> Don't have an account? </h2>
      <Button
        className="bold hover:border-b-2 py-1 px-0"
        onClick={(e) => {
          e.preventDefault();
          signUp();
        }}
      >
        Sign up!
      </Button>
    </div>

    <div className="mt-4 flex relative bottom-[-25px] justify-between ">
      <Button
        onClick={handleSubmit}
        className="px-6 py-3 flex justify-center
            after:absolute relative  after:aspect-square after:top-[-1em] after:rounded-[100%] after:left-[50%]
            duration-500 z-[1]
            hover:text-gray-900
            text-white after:z-[-1] 
             after:overflow-visible after:bg-white after:translate-x-[-50%]
            save hover:after:top-[50%] hover:after:translate-y-[-50%] after:duration-500
            "
        type="submit"
      >
        Save
      </Button>
      <Button
        className="w-1/6 px-20 relative py-0 flex justify-center  border  after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:bg-white after:w-1/12 after:aspect-square after:rounded-[100%] duration-500 hover:after:w-[150%]  hover:text-gray-900 overflow-hidden after:duration-500 z-[1] after:z-[-1] "
        type="submit"
        onClick={onClose}
      >
        Cancel
      </Button>
    </div>
  </form>
</div>

  );
}

export default SignInModal;
