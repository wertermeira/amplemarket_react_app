import { React, useState } from "react";
import api from "../services/api";
import FormTemplate from "./form_template";

export default function CreateTemplate ({addTemplate}) {

  const[template, setTemplate] = useState({
    name: "",
    content: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    setButtonDisabled(true);
    event.preventDefault();
    try {
      api.post('/templates', template).then((response) => { addTemplate(response.data.data) });
      document.querySelectorAll('input');
      handleResetForm();
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
      setButtonDisabled(false);
    };
  };

  const handleResetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    template.name = "";
    template.content = "";
  };

  const handleChange = (event) => {
    setTemplate({
      ...template,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="CreateTemplate mb-3">
      <h3 className="text-center">Create template</h3>
      <FormTemplate template={template} handleSubmit={handleSubmit} handleChange={handleChange} buttonDisabled={buttonDisabled} />
    </div>
  )
}