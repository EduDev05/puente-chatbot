import { render } from "@testing-library/react";


function App() {
   const estilos = {
    height: '400px',
    width: '400px'
  }

    return (
      <div>
        <h1>HOLA SOY EL PUENTE</h1>
        <iframe style={estilos} src="https://main.d35jv8fs6wvm2f.amplifyapp.com" />
      </div>
    );
  
 
}

export default App;
