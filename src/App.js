import C01componente from './components/C01componente';
import C02contador from './components/C02contador';

function App() {
  return (
    <div className="App">
      <h4>Sitio web con React -Mensaje desde app </h4>
      <C01componente/>
      <hr/>
      <p>Esta es una prueba. Que estara en la nube. HOLA</p>
      <C02contador/>
    </div>
  );
}

export default App;
