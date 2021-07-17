import MenuNav from './sitioweb/MenuNav';


function App() {
  return (
    <div className="container-block">
      <MenuNav/>
                  <header className="row bg-secondary ps-2 pe-2">
                    <img src="https://i.ibb.co/d2FP8XR/header.jpg" alt="header imagne" style={{height:'7rem'}}/>
                  </header>

              <nav className="row bg-danger">
                <div className="container-block">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#">Navbar</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li>
                      </ul>
                      </div>
                    </div>
                    </nav>
                </div>
              </nav>


              <section className="row "> 
                <aside className="col-md-6 bg-warning ps-4">
                  Articulo 1
                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                      <img src="https://i.ibb.co/Hh1JKMD/galeria1.jpg" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                      </div>
                      <div className="carousel-item">
                      <img src="https://i.ibb.co/SRmr87h/galeria2.jpg" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                      </div>
                      <div className="carousel-item">
                      <img src="https://i.ibb.co/dQRxgmb/galeria3.jpg" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    <br/>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora qui illo possimus suscipit exercitationem laudantium eligendi quibusdam, tempore non. Officia, dignissimos velit. Magni nemo possimus, corporis placeat rem hic.
                </aside>

                <article className="col-md-4 bg-secondary"> 
                  Articulo 2
                  <br/>
                  <img src="https://i.ibb.co/yRSsGv9/colibri.jpg" className="img-thumbnail" alt="colibri" style={{width:'97%'}}/>
                  <br/>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora qui illo possimus suscipit exercitationem laudantium eligendi quibusdam, tempore non. Officia, dignissimos velit. Magni nemo possimus, corporis placeat rem hic.
                  
                </article>
                
                <article className="col-md-2 bg-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi autem. Labore tempora blanditiis quis reprehenderit ratione aliquam quisquam  aliquam quisq
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi autem. Labore tempora blanditiis quis reprehenderit ratione aliquam quisquam  aliquam
                  <br/>
                  <button className="btn btn-secondary p-4 ms-4 me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

                  <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>

                  <div className="offcanvas-body">
                    <main>
                      <div className="flex-shrink-0 p-3 bg-white" style={{width: 280}}>
                        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <svg class="bi me-2" width="30" height="24"><use  xlinkHref="#bootstrap"/></svg>
                        <span className="fs-5 fw-semibold">Collapsible</span>
                        </a>
                        <ul className="list-unstyled ">
                        <li className="mb-1">
                          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                          Home
                          </button>
                          <div className="collapse show" id="home-collapse">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="dropdown-item link-dark rounded">Overview</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Updates</a></li>
                            <li><a href="#" className=" dropdown-item link-dark rounded">Reports</a></li>
                          </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                          Dashboard
                          </button>
                          <div className="collapse" id="dashboard-collapse">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="dropdown-item link-dark rounded">Overview</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Weekly</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Monthly</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Annually</a></li>
                          </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                          Orders
                          </button>
                          <div className="collapse" id="orders-collapse">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="dropdown-item link-dark rounded">New</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Processed</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Shipped</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Returned</a></li>
                          </ul>
                          </div>
                        </li>
                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                          Account
                          </button>
                          <div className="collapse" id="account-collapse">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="dropdown-item link-dark rounded">New...</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Profile</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Settings</a></li>
                            <li><a href="#" className="dropdown-item link-dark rounded">Sign out</a></li>
                          </ul>
                          </div>
                        </li>
                        </ul>
                      </div>
                    </main>
                  </div>
                </div>
                  
                </article>

              </section>

              <footer className="row bg-dark text-light ps-5">
                footer
              </footer>
</div>
  );
}

export default App;
