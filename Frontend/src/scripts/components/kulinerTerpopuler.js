class kulinerTerpopuler extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section id="terpopuler">
          <div class="terpopuler-inner">
              <h2>Kuliner Terpopuler</h2>
          </div>
          
          <div class="container-fluid">
            <div class="row row-cols-1 row-cols-md-3 g-4 terpopuler-grup-card">
              <div class="col">
                <div class="card custom-card-terpopuler">
                  <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.5
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card custom-card-terpopuler">
                  <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.5
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card custom-card-terpopuler">
                  <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                  <p class="card-text icon-text">
                    <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                  </p>
                  <p class="card-text icon-text">
                    <i class="bi bi-star-fill"></i> 4.5
                  </p>
                  <p class="card-text icon-text">
                    <i class="bi bi-eye-fill"></i> 1234x
                  </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card custom-card-terpopuler">
                  <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                  <p class="card-text icon-text">
                    <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                  </p>
                  <p class="card-text icon-text">
                    <i class="bi bi-star-fill"></i> 4.5
                  </p>
                  <p class="card-text icon-text">
                    <i class="bi bi-eye-fill"></i> 1234x
                  </p>
                  </div>
                </div>
              </div>
                <div class="col">
                  <div class="card custom-card-terpopuler">
                    <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.5
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card custom-card-terpopuler">
                    <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center custom-card-title">Nama Restaurant</h5>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> Alamat Restaurant
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> 4.5
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-eye-fill"></i> 1234x
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
          </section>
          `;
  }
}

customElements.define('kuliner-terpopuler', kulinerTerpopuler);
