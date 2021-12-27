import { React, useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import FormTemplate from '../components/form_template';
import { Link } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const [template, setTemplate] = useState({
    name: '',
    content: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    try {
      let attributes = {
        name: template.name,
        content: template.content,
      }
      api.put(`/templates/${id}`, attributes).then((response) => {
        setTemplate(response.data.data.attributes);
        setSaved(true);
        setButtonDisabled(false);
      });
    } catch (error) {
      console.error(error);
      setButtonDisabled(false);
    }
  };

  const handleChange = (event) => {
    setTemplate({
      ...template,
      [event.target.name]: event.target.value
    })
  }
    

  useEffect(() => {
    async function loadTemplate() {
      await api.get(`/templates/${id}`).then((response) => {
        setTemplate(response.data.data.attributes);
      }).catch((error) => {
        console.error(error);
      });
    }
    loadTemplate();
  }, [id]);
  return (
    <div className="Edit">
      <div className='text-center'>
        <Link className="btn btn-sm btn-primary mb-3" to='/'> &lt; Back to home</Link>
      </div>
      <h3 className='text-center'>Edit Template</h3>
      <FormTemplate template={template} handleSubmit={handleSubmit} handleChange={handleChange} buttonDisabled={buttonDisabled} />
      { saved && <div className='alert alert-success mt-3'>Template saved!</div> }
    </div>
  );
}