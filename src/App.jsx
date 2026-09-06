import Saludo from './Saludo.jsx'

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <h2>Usando React sin IA</h2>
      <br>
      </br>
      <Saludo nombre="Diana" />
      <Saludo nombre="Opinator" />
      <Saludo/>
      <Saludo nombre={8656754} edad={42} activo={true}/>
    </>
  )
}

export default App
