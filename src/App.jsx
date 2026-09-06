import Saludo from './Saludo.jsx'
import {useState} from 'react'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>Hola Mundo</h1>
      <h2>Usando React sin IA</h2>
      <br/>
      <Saludo nombre="Diana" />
      <Saludo nombre="Opinator" />
      <Saludo/>
      <Saludo nombre={8656754} edad={42} activo={true}/>
      <br/>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>

      <button onClick={() => { setContador((n) => n + 1); setContador((n) => n + 1); setContador((n) => n + 1) }}>
        Sumar 3
      </button>
      <button onClick={() => { setContador((n) => n - 1); setContador((n) => n - 1); setContador((n) => n - 1) }}>
        Restar 3
      </button>
    </>
  )
}

export default App
