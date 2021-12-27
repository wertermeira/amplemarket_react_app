import { useEffect, React, useState } from 'react';
import ListTemplate from '../components/list_template';
import CreateTemplate from '../components/create_template';
import api from '../services/api';

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const addTemplate = (template) => {
    setTemplates([template, ...templates]);
  };

  useEffect(() => {
    api
    .get('/templates')
    .then((response) => {
      setTemplates(response.data.data) 
      setLoading(false);
    })
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

  const List = () => {
    if (loading) {
      return (
        <h3 className='text-center'>Loading...</h3>
      )
    }
    else {
      return (
        <div>
          { templates.length > 0 && <ListTemplate templates={templates} handleDelete={handleDelete} />  }
          { templates.length === 0 && <h3 className="text-center">No templates found</h3> }
        </div>
      )
    }
  }

  return (
    <div className="Home">
      <CreateTemplate addTemplate={addTemplate} />
      <List />
    </div>
  );
}