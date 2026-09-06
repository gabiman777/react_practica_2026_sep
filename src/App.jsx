import Saludo from './Saludo.jsx'
import {useState} from 'react'

function App() {
  const [contador, setContador] = useState(10)

  const[texto, setTexto] = useState("Gabriel")

  return (
    <>
      <h1>Hola Mundo</h1>
      <Saludo nombre="Diana" />
      <Saludo/>
      <Saludo nombre={8656754} edad={42} activo={true}/>

      <br/><hr />
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(10)}>Reiniciar</button>

      <button onClick={() => { setContador((n) => n + 1); setContador((n) => n + 1); setContador((n) => n + 1) }}>
        Sumar 3
      </button>
      <button onClick={() => { setContador((n) => n - 1); setContador((n) => n - 1); setContador((n) => n - 1) }}>
        Restar 3
      </button>

      <br/><hr />
      <Saludo nombre={texto} />
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value.toUpperCase())} placeholder="Escribe algo..." maxLength={20}/>
      <button onClick={() => setTexto("")}>Limpiar</button>
      <p>Estás escribiendo: {texto}</p>
      <p>Longitud: {texto.length} caracteres</p>
    </>
  )
}

export default App
