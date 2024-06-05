class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NusantaRasa</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">NusantaRasa</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" aria-current="page" href="/">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#jelajahi">Jelajahi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#terpopuler">Terpopuler</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#about">Tentang</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('header-bar', headerBar);
