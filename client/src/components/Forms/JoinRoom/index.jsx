import React, { useState } from 'react';

function JoinRoomForm() {
  const [name, setName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', input1, input2);
  };

  return (
    <div className="max-w-md w-[60%] mt-10 p-6 bg-transparent border border-green-800 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <p className="text-center text-green-800 text-3xl font-bold mb-8">
            Join Room
        </p>
        <div className="mb-10">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none bg-transparent border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Room Code
          </label>
          <input
            className="shadow appearance-none bg-transparent border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <div className="text-center mb-10">
          <button
            className="bg-transparent hover:bg-green-800 text-green-800 hover:text-gray-300 font-bold py-2 px-16 border border-green-800 hover:border-transparent rounded-full"
            type="submit"
          >
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinRoomForm;


