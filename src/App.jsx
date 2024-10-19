import { useEffect, useState } from 'react'

export function App() {
  const [count, setCount] = useState(0);
  const [palavra, setPalavra] = useState("banana");
  const [palavraQuebrada, setPalavraQuebrada] = useState([]);
  const [palavraSub, setPalavraSub] = useState([]);
  const [letrasAcertadas, setLetrasAcertadas] = useState([]);
  const [letraEscolhida, setLetraEscolhida] = useState("");;

  useEffect(() => {
    convertpalavraArray();
  }, [])

  function convertpalavraArray() {
    let letras = palavra.split('');
    setPalavraQuebrada(letras);
    setPalavraSub(letras.map(() => '_'));
  }

  function send() {
    const valorInput = document.getElementById('inputLetra').value;
    let letra = valorInput[0];
    
    let novaPalavraSub = [...palavraSub];

    for (let i = 0; i < palavraQuebrada.length; i++) {
      if (letra === palavraQuebrada[i]) {
        novaPalavraSub[i] = letra;
      }
    }

    setPalavraSub(novaPalavraSub);
  }

  return (
    <>
      {palavraSub.map((letra, index) => (
        <div key={index}>{letra}</div>
      ))}

      <input type="text" id="inputLetra" /> 
      <button onClick={send}>enviar</button>
    </>
  )
}
