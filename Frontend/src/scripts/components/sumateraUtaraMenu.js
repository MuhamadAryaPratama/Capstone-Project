class SumateraUtaraMenu extends HTMLElement {
    connectedCallback() {
      this.fetchData();
    }
  
    async fetchData() {
      try {
        const response = await fetch("http://localhost:4000/sumaterautara");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.render(data);
      } catch (error) {
        console.error("Fetch error:", error);
        this.renderError(error);
      }
    }
  
    render(menus) {
      this.innerHTML = `
          <div class="container">
            <h1>Aceh Menu</h1>
            <ul>
              ${menus
                .map(
                  (menu) => `
                <li>
                  <h2>Nama Restoran: ${menu.restaurant_name}</h2>
                  <p>Deskripsi: ${menu.description}</p>
                  <p>Link Google Maps: <a href="${menu.google_maps_link}" target="_blank">Google Maps</a></p>
                  <p>Rating: ${menu.rating}</p>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        `;
    }
  
    renderError(error) {
      this.innerHTML = `
          <div class="container">
            <h1>Error Loading Sumatera Utara Menu</h1>
            <p>Error: ${error.message}</p>
          </div>
        `;
    }
  }
  
  customElements.define("sumaterautara-menu", SumateraUtaraMenu);
  