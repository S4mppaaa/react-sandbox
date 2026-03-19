import React from 'react';
// Import the newly created component
import { Profile } from './components/Profile';
import { TeamCard } from './components/TeamCard';



export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-8">

    {/* otsikko */}
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>

      {/* profiili */}
      <div className="mb-10">
        <Profile name="Samppa" role="Junior Developer" />
      </div>

      {/* tiimit */}
      <div className="flex gap-4">
      <TeamCard name="Juho" role="Frontend Developer" />
      <TeamCard name="Pekka" role="Backend Developer" />
      <TeamCard name="Samu" role="UI Designer" />
      </div>
    </div>
  );
}