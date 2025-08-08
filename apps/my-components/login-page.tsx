import Button from "../common/Button";
import Input from "../common/Input";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="">
      <form>
        <Input
          label="Username"
          type="text"
          onChange={(e) => {
            setForm({ ...form, username: e.target.value });
          }}
        ></Input>

        <Input
          label="Password"
          type="password"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        ></Input>

        <Button
          onClick={(e) => {
            e.preventDefault();
            if (form.username === "" || form.password === "") {
              alert("Please fill in both fields.");
              return;
            }
            alert(`Username: ${form.username}, Password: ${form.password}`);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
