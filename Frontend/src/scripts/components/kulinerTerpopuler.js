class kulinerTerpopuler extends HTMLElement {
  connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('http://localhost:4000/kulinerterpopuler');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.error('Fetch error:', error);
      this.renderError(error);
    }
  }

  render(menus) {
    this.innerHTML = `
      <section id="terpopuler">
        <div class="terpopuler-inner">
          <h2>Kuliner Terpopuler</h2>
        </div>
        <div class="container-fluid">
          <div class="row row-cols-2 row-cols-md-3 g-4 terpopuler-grup-card">
            ${menus.map(menu => `
              <div class="col">
                <div class="card custom-card-terpopuler">
                  <img src="/images/hero/food-bg.jpeg" class="card-img-top custom-img-terpopuler lazyload" alt="${menu.restaurant_name}">
                  <div class="card-body">
                    <h5 class="card-title text-center custom-card-title">${menu.restaurant_name}</h5>
                    <p class="card-text icon-text">
                      <i class="bi bi-geo-alt-fill"></i> <a href="${menu.google_maps_link}" target="_blank">View on Google Maps</a>
                    </p>
                    <p class="card-text icon-text">
                      <i class="bi bi-star-fill"></i> ${menu.rating}
                    </p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderError(error) {
    this.innerHTML = `
      <section id="terpopuler">
        <div class="terpopuler-inner">
          <h2>Kuliner Terpopuler</h2>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="alert alert-danger" role="alert">
                ${error.message}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('kuliner-terpopuler', kulinerTerpopuler);
