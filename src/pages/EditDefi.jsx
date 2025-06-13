import React, { useState, useEffect } from 'react';
import { fetchDefis, updateDefi } from '../services/defiService';
import { useNavigate, useParams } from 'react-router-dom';

const EditDefi = () => {
  const [form, setForm] = useState({ title: '', goal: '', startDate: '', endDate: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDefis().then(res => {
      const current = res.data.find(d => d.id === parseInt(id));
      setForm(current);
    });
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDefi(id, form);
    navigate('/');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Modifier le défi</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" value={form.title} onChange={handleChange} className="border p-2" />
        <input name="goal" type="number" value={form.goal} onChange={handleChange} className="border p-2" />
        <input name="startDate" type="datetime-local" value={form.startDate} onChange={handleChange} className="border p-2" />
        <input name="endDate" type="datetime-local" value={form.endDate} onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Enregistrer</button>
      </form>
    </div>
  );
};

export default EditDefi;


