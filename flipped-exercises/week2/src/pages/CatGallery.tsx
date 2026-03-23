import React, { useState, useEffect } from 'react';

type Cat = {
  id: string;
  url: string;
};

export function CatGallery() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data: Cat[]) => setCats(data))
      .catch((error) => console.error('Error fetching cats:', error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Cat Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}