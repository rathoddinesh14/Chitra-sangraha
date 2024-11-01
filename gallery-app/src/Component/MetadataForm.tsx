import React, { useState } from 'react';
import './MetadataForm.css';

interface MetadataFormProps {
  onSubmit: (metadata: { title: string; description: string }) => void;
  onCancel?: () => void; // Optional cancel handler
}

const MetadataForm: React.FC<MetadataFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ title, description });
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      // Handle default behavior if no onCancel provided
      console.log('Metadata editing canceled.');
    }
  };

  return (
    <form className="metadata-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="button-container">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default MetadataForm;