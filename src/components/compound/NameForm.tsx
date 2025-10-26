import React, { useState } from "react";
import Input from "../common/Input";

const NameForm: React.FC = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div className="mx-auto mt-[20px] block max-w-[400px] border p-[12px]">
      <Input
        label="First Name"
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      <Input
        label="Last Name"
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />

      <div
        className={
          name.firstName || name.lastName ? "flex justify-center" : "hidden"
        }
      >
        <p>Your full name is:&nbsp;</p>
        <p>
          {name.firstName} {name.lastName}
        </p>
      </div>
    </div>
  );
};

export default NameForm;
