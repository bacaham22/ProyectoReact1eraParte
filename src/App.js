import Carrusel from './sitioweb/Carrusel';
import MenuNav from './sitioweb/MenuNav';
import Heder from './sitioweb/Heder';
import CardTarjeta from './sitioweb/CardTarjeta';
import Aside from './sitioweb/Aside';

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
          <article className="col-md-3 bg-primary">
              <Aside/>
          </article>
      </section>

      <footer className="row bg-dark text-light ps-5">
        footer
      </footer>
</div>
  );
}

export default App;
