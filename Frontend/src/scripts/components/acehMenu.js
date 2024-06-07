class AcehMenu extends HTMLElement {
  connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('http://localhost:4000/aceh');
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
        <div class="container">
          <h1>Nanggroe Aceh Darussalam</h1>
          <ul>
              <li class="menu-item">
                <img src="/images/hero/food-bg.jpeg" class="gambar-menu lazyload" alt="...">
                <div class="menu-item-text">
                  <h2>Waroeng Mak Cik Sedayu </h2>
                  <p>Makanan tradisional juga dapat didefinisikan sebagai makanan umum yang biasa dikonsumsi sejak beberapa generasi, terdiri dari hidangan yang sesuai dengan selera manusia, tidak bertentangan dengan keyakinan agama masyarakat lokal, dan dibuat dari bahan-bahan makanan dan rempah-rempah yang tersedia lokal (Sastroamidjojo</p>
                  <p><i class="bi bi-geo-alt-fill"></i> <a href="#" target="_blank">Google Maps</a></p>
                  <p><i class="bi bi-star-fill"></i> 4.4</p>
                </div>
              </li>
          </ul>
        </div>
      `;
  }

  renderError(error) {
    this.innerHTML = `
        <div class="container">
          <h1>Error Loading Aceh Menu</h1>
          <p>Error: ${error.message}</p>
        </div>
      `;
  }
}

customElements.define('aceh-menu', AcehMenu);
