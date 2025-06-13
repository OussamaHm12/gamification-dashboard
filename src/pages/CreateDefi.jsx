import React, { useState } from 'react';
import { createDefi } from '../services/defiService';
import { useNavigate } from 'react-router-dom';

const CreateDefi = () => {
  const [form, setForm] = useState({ title: '', goal: '', startDate: '', endDate: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDefi(form);
    navigate('/');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Créer un nouveau défi</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" placeholder="Titre" onChange={handleChange} className="border p-2" required />
        <input name="goal" type="number" placeholder="Objectif" onChange={handleChange} className="border p-2" required />
        <input name="startDate" type="datetime-local" onChange={handleChange} className="border p-2" required />
        <input name="endDate" type="datetime-local" onChange={handleChange} className="border p-2" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Créer</button>
      </form>
    </div>
  );
};

export default CreateDefi;
