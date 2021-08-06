import React from 'react'

const Aside = () => {
    return (
        <div>
          <hr/>
          <div class="container-block ">
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
                <hr/> 
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form>
                        <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                        </div>
                        </div>
                </div>
        </div>
<hr/> 
                <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
<div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div className="offcanvas-header ">
  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
  <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

<div className="offcanvas-body ">
  <main>
    <div className="flex-shrink-0 p-3 bg-white " style={{width: 280}}>
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
<hr/>
<p className="text-white ">Envianos un mensaje</p>
        </div>
    )
}

export default Aside
