import axios from 'axios';
const API = 'http://localhost:8080/defis';

// ✅ Récupérer tous les défis
export const fetchDefis = () => axios.get(`${API}/all`);

// ✅ Créer un défi via @RequestParam
export const createDefi = (data) =>
  axios.post(`${API}/create`, null, {
    params: {
      title: data.title,
      goal: data.goal,
      startDate: data.start_date + 'T00:00:00',
      endDate: data.end_date + 'T00:00:00',
    }
  });


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
