import { useState } from "react";

export default function App() {
  const [altura, setAlt] = useState("");
  const [base, setBase] = useState("");

  const [areaResult, setareaResult] = useState(null);

  function calculateAREA() {
    let area = Number((base * altura) / 2);
    setareaResult(area);

    setAlt("");
    setBase("");
  }

  return (
    <div className="w-full max-w-xs m-10">
      <form className="bg-white-center ">
        <h1 className="text-center mb-4 text-xl"> AREA Calculator</h1>
        <div className="mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2"  for="password"
          >
            base
          </label>
          <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  id="base"  type="base" placeholder="base:"  value={base}  onChange={(e) => setBase(e.target.value)}
          />
        </div>
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            altura
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="altura "    type="text"  placeholder="altura :"  value={altura}  onChange={(e) => setAlt(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button  className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"    type="button"    onClick={calculateAREA}
          >
            Calculate AREA
          </button>
        </div>
        {areaResult && (
          <div className="mt-4">
            <p>Sua area é: {areaResult} </p>
          </div>
        )}
      </form>
    </div>
  );
}
