import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

export default function ItemTemplate({ item, handleDelete }) {
  
  const handleClick = () => {
    window.top.postMessage(item.attributes.content, '*');
  }

  return (
    <ListGroup.Item>
      <div onClick={() => handleClick()} style={{cursor: 'copy'}}>
        <h4>{item.attributes.name}</h4>
        <p>{item.attributes.content}</p>
        <TimeAgo date={item.attributes.created_at} />
      </div>
      <hr />
      <Link className='btn btn-sm btn-primary ' to={`/templates/${item.id}/edit`}>Edit</Link>
      <button className='btn btn-sm btn-danger ms-3' onClick={() => handleDelete(item.id)}>Delete</button>
    </ListGroup.Item>
  );
}