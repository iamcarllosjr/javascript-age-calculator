'use client'

import { useState } from "react";

export default function Home() {

  const [ano, setAno] = useState('');
  const [mes, setMes] = useState('');
  const [dia, setDia] = useState('');
  const [idade, setIdade] = useState(Number);
  const [meses, setMeses] = useState(Number);
  const [dias, setDias] = useState(Number)

  const calcularIdade = () => {
    const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
    const hoje = new Date();
    const diff = Math.abs(hoje.getTime() - dataNascimento.getTime());
    const idadeAnos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const idadeMeses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const idadeDias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    setIdade(idadeAnos);
    setMeses(idadeMeses);
    setDias(idadeDias);
  };

  

  return (
    <main className="w-full min-h-[100vh] text-white p-[10px] bg-gradient-to-r from-blue-800 to-blue-500">
      <div className="w-full max-w-[600px] ml-[10%] mt-[10%]">
        <h1 className="text-[60px] font-bold">Javascript<br /> <span className="text-[#ffff76]">Age Calculator</span></h1>
        <div className="flex items-center p-[35px] rounded-[10px] mt-[10px] bg-slate-400">
          <input className="input-dia" type="text" placeholder="Day" value={dia} onChange={(e) => setDia(e.target.value)}/>
          <input className="input-mes" type="text" placeholder="Month" value={mes} onChange={(e) => setMes(e.target.value)}/>
          <input className="input-ano" type="text" placeholder="Year" value={ano} onChange={(e) => setAno(e.target.value)}/>
          <button className="btn-calcular" onClick={calcularIdade}>Calculator</button>
        </div>
        <div className="mt-5 font-semibold tracking-wider text-2xl">
          {idade > 0 && (
            <p>Sua idade é {idade} anos, {meses} meses e {dias} dias.</p>
          )}
        </div>
      </div> 
    </main>
  )
}
