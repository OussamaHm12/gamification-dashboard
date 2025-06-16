import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Tableau de bord</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4 shadow">
          <p className="text-sm text-muted-foreground">Nombre de défis</p>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow">
          <p className="text-sm text-muted-foreground">Utilisateurs actifs</p>
          <p className="text-2xl font-bold mt-2">58</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow">
          <p className="text-sm text-muted-foreground">Défis terminés</p>
          <p className="text-2xl font-bold mt-2">7</p>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
