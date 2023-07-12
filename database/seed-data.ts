interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En-Progreso: Dolorum soluta animi aspernatur corrupti quod consequatur fugiat molestiae iste sit quasi repellendus porro.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminadas: Nemo adipisci a obcaecati sequi, earum, ipsam repellat.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
