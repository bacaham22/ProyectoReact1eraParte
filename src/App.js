import Carrusel from './sitioweb/Carrusel';
import MenuNav from './sitioweb/MenuNav';
import Heder from './sitioweb/Heder';
import CardTarjeta from './sitioweb/CardTarjeta';
import Aside from './sitioweb/Aside';
import VideoPeli from './sitioweb/VideoPeli';
import PiePag from './sitioweb/PiePag';
import MapaUbic from './sitioweb/MapaUbic';


function App() {
  return (
    <div className="container-block">
      <header>
              <Heder/> 
      </header>

      <nav className="row bg-danger">
              <MenuNav/>
      </nav>

      <section className="row"> 
          <aside className="col-md-6 bg-warning ps-4">
              <Carrusel/>
            </aside>
          <article className="col-md-3 bg-secondary"> 
              <CardTarjeta/>
          </article>
          <aside className="col-md-3 bg-primary">
              <Aside/>
          </aside>
      </section>
    <section className="row bg-dark text-light">
          <article className="col-md-5 justify-content-center bg-success"> 
              <MapaUbic/>
          </article>
          <article className="col-md-7  d-flex justify-content-center bg-secondary "> 
              <VideoPeli/>
          </article>
    </section>  
    <footer className="row bg-dark d-flex justify-content-center align-items-center text-light bg-dark">
          <PiePag/>
    </footer>

</div>
  );
}

export default App;
