import React, { useState } from 'react';

interface Cardprops {
	name: string;
	role: string;
}

export function TeamCard({ name, role }: Cardprops) {
	const [votes, setVotes] = useState(0);

	return (
		<div className="bg-white rounded-xl shadow-md p-6 w-64 text-center">
		<h2 className="text-xl font-bold">{name}</h2>
		<p className="text-gray-500 mb-4">{role}</p>

		<button
        onClick={() => setVotes((prev) => prev + 1)}
        className="w-full bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-100 flex justify-center gap-2 transition-colors"
      >
		   Vote 👍 {votes}
      </button>
	</div>
	);
}