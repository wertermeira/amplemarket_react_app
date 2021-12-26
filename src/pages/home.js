import { useEffect, React, useState } from 'react';
import ListTemplate from '../components/list_template';
import CreateTemplate from '../components/create_template';
import api from '../services/api';

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const addTemplate = (template) => {
    setTemplates([template, ...templates]);
  };

  useEffect(() => {
    api
    .get('/templates')
    .then((response) => { setTemplates(response.data.data) })
    .catch((error) => { console.log(error) });
  }, []);

  const handleDelete = (id) => {
    try {
      api.delete(`/templates/${id}`).then(() => {
        setTemplates(templates.filter(template => template.id !== id));
      });
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Home">
      <CreateTemplate addTemplate={addTemplate} />
      { templates.length > 0 && <ListTemplate templates={templates} handleDelete={handleDelete} />  }
      { templates.length === 0 && <h3 className="text-center">No templates found</h3> }
    </div>
  );
}