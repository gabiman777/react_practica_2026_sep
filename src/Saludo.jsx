/*
//componente con props
function Saludo(props){
    return(
        <h1><p>Hola, {props.nombre}</p></h1>
    )
}
*/

//Otra forma de hacer el componente Saludo es usando destructuring en los props y asignando valores por defecto.
function Saludo({nombre = "invitado", edad, activo}){
    return(
        <>
            <h1>Hola, {nombre}</h1>
            {edad && <h2>Edad: {edad}</h2>}
            {activo && <h3>Cuenta activa. {activo}</h3>}
        </>
    )
}

export default Saludo