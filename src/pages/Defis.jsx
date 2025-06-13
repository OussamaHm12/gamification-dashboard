import React, { useEffect, useState } from 'react';
import { fetchDefis, createDefi, updateDefi, deleteDefi } from '../services/defiService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Pencil, Trash2 } from 'lucide-react';

const Defis = () => {
  const [defis, setDefis] = useState([]);
  const [selectedDefi, setSelectedDefi] = useState(null);
  const [formData, setFormData] = useState({ title: '', goal: '', startDate: '', endDate: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadDefis = async () => {
      const res = await fetchDefis();
      setDefis(res.data);
    };
    loadDefis();
  }, []);

  const handleSubmit = async () => {
    if (selectedDefi) {
      await updateDefi(selectedDefi.id, formData);
    } else {
      await createDefi({
        ...formData,
        start_date: formData.startDate.split('T')[0],
        end_date: formData.endDate.split('T')[0],
      });
    }
    setFormData({ title: '', goal: '', startDate: '', endDate: '' });
    setSelectedDefi(null);
    setIsFormOpen(false);
    const res = await fetchDefis();
    setDefis(res.data);
  };

  const handleDelete = async (id) => {
    await deleteDefi(id);
    const res = await fetchDefis();
    setDefis(res.data);
  };

  const filteredDefis = defis.filter((d) =>
    d.title?.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleDateString();
    } catch {
      return value;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">📋 Défis</h2>
        <Button variant="default" onClick={() => {
          setSelectedDefi(null);
          setFormData({ title: '', goal: '', startDate: '', endDate: '' });
          setIsFormOpen(true);
        }}>
          + Nouveau défi
        </Button>
      </div>

      <div className="flex justify-between items-center mb-2">
        <Input
          placeholder="🔎 Rechercher un défi..."
          className="w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground border-b">
            <tr>
              <th className="p-4 text-left">Titre</th>
              <th className="p-4 text-left">Objectif</th>
              <th className="p-4 text-left">Début</th>
              <th className="p-4 text-left">Fin</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDefis.length > 0 ? (
              filteredDefis.map((defi) => {
                const start = defi.startDate || defi.start_date;
                const end = defi.endDate || defi.end_date;
                return (
                  <tr key={defi.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-4">{defi.title}</td>
                    <td className="p-4">{defi.goal}</td>
                    <td className="p-4">{formatDate(start)}</td>
                    <td className="p-4">{formatDate(end)}</td>
                    <td className="p-4 flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedDefi(defi);
                          setFormData({
                            title: defi.title,
                            goal: defi.goal,
                            startDate: start,
                            endDate: end,
                          });
                          setIsFormOpen(true);
                        }}
                      >
                        <Pencil className="w-4 h-4 mr-1" /> Modifier
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(defi.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Supprimer
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-muted-foreground">
                  Aucun défi trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {isFormOpen && (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-lg">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">
                {selectedDefi ? 'Modifier le défi' : 'Créer un défi'}
              </h3>
              <Input
                placeholder="Titre"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Objectif"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              />
              <Input
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
              <Input
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="secondary" onClick={() => setIsFormOpen(false)}>
                  Annuler
                </Button>
                <Button onClick={handleSubmit}>
                  {selectedDefi ? 'Modifier' : 'Créer'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Defis;
