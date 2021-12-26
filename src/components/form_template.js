import { React } from "react";
import { Form, Button } from "react-bootstrap";

export default function FormTemplate({template, handleSubmit, handleChange}) {
  const { name, content } = template;
  
  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="content" className="mb-3">
          <Form.Control as="textarea" rows={3} type="text" placeholder="Content" name="content" value={content} onChange={handleChange} required />
        </Form.Group>
        <Button variant="success" className="btn btn-sm" type="submit">
          Save
        </Button>
      </Form>
    )
  }