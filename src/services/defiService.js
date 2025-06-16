import axios from 'axios';
const API = 'http://localhost:8080/defis';

// ✅ Récupérer tous les défis
export const fetchDefis = () => axios.get(`${API}/all`);

// ✅ Créer un défi via @RequestParam
export const createDefi = (data) => {
  const rawStart = data.start_date || data.startDate || '';
  const rawEnd = data.end_date || data.endDate || '';
  const startDate = rawStart.includes('T') ? rawStart : `${rawStart}T00:00:00`;
  const endDate = rawEnd.includes('T') ? rawEnd : `${rawEnd}T00:00:00`;

  return axios.post(`${API}/create`, null, {
    params: {
      title: data.title,
      goal: data.goal,
      startDate,
      endDate,
    },
  });
};


// ✅ Modifier un défi via @RequestBody
export const updateDefi = (id, data) => axios.put(`${API}/${id}`, {
  id: parseInt(id),
  title: data.title,
  goal: parseInt(data.goal),
  startDate: data.start_date || data.startDate,
  endDate: data.end_date || data.endDate,
});

// ✅ Supprimer un défi
export const deleteDefi = (id) => axios.delete(`${API}/${id}`);
