import { ChangeEvent, FormEvent } from "react";
import Button from "./button";
import Input from "./input";
import formStore from "../stores/formStore";
import { observer } from "mobx-react";

const Form = () => {
  const labelNames = [
    "Name:",
    "Email:",
    "Phone:",
    "Address:",
    "City:",
    "Country:",
  ];

  const handleInputChange =
    (i: number) => (e: ChangeEvent<HTMLInputElement>) => {
      formStore.setFormData(i, e.target.value);
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formStore.getFormData());

    formStore.clearInputValues();
  };

  return (
    <>
      <div className="form">
        <h1 className="form-title">Contact us</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          {labelNames.map((label, i) => (
            <Input
              key={i}
              value={formStore.formData[i]}
              onChange={handleInputChange(i)}
              text={label}
            />
          ))}

          <label>Write your post:</label>
          <textarea
            name="postContent"
            rows={5}
            cols={20}
            className="textarea"
          />
          <Button text="Submit" position="formposition" />
        </form>
      </div>
    </>
  );
};

export default observer(Form);
