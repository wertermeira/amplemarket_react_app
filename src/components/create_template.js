import { React, useState } from "react";
import api from "../services/api";
import FormTemplate from "./form_template";

export default function CreateTemplate ({addTemplate}) {

  const[template, setTemplate] = useState({
    name: "",
    content: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      api.post('/templates', template).then((response) => { addTemplate(response.data.data) });
      document.querySelectorAll('input');
      handleResetForm();
    } catch (error) {
      console.error(error);
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
      <FormTemplate template={template} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  )
}