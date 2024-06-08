import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className='h-screen flex' style={{ backgroundColor: color }}>
      <h1 className='text-center mt-4 flex justify-between'>Change Background Color</h1>
      <div className="mt-2 my-6 mx-9 py-4">
        <button onClick={() => setColor("red")} className='py-6 px-6 mx-4 mt-7 rounded-xl bg-red-700 '>Red</button>
        <button onClick={() => setColor("green")} className='py-6 px-6 mt-7 mx-4 rounded-xl bg-green-500'>Green</button>
        <button onClick={() => setColor("blue")} className='py-6 px-6 mt-7 mx-4 rounded-xl bg-blue-600'>Blue</button>
        <button onClick={() => setColor("yellow")} className='py-6 px-6 mt-7 mx-4 rounded-xl bg-yellow-500'>Yellow</button>
      </div>
    </div>
  );
}

export default App;
