class EditResto extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="container">
              <div class="dashboard-content">
                  <div class="editResto">
                      <h2 class="editresto-title">Edit Restoran Berdasarkan Provinsi</h2>
                      <form id="editpage-form">
                          <label for="provinsi-select">Pilih Provinsi:</label>
                          <select name="provinsi-select" id="provinsi-select" required>
                              <option value="">Pilih Provinsi</option>
                              <option value="aceh">Nanggroe Aceh Darussalam</option>
                              <option value="bali">Bali</option>
                              <!-- Add other options for provinces -->
                          </select>
                      </form>
                      <div id="resto-data"></div>
                  </div>
              </div>
          </div>
      `;

    const provinsiSelect = this.querySelector("#provinsi-select");
    provinsiSelect.addEventListener("change", this.loadRestoData.bind(this));
  }

  async loadRestoData() {
    const provinsi = document.querySelector("#provinsi-select").value;
    const restoDataDiv = document.querySelector("#resto-data");

    if (!provinsi) {
      restoDataDiv.innerHTML = "";
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/${provinsi}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const restaurantDataArray = await response.json();

      restoDataDiv.innerHTML = `
        <h3 class="dataresto-title">Data Restoran di ${provinsi}</h3>
      `;

      restaurantDataArray.forEach((menu) => {
        restoDataDiv.innerHTML += `
          <div class="resto-container">
              <div class="resto-info">
                  <h3 class="resto-info-title">${menu.restaurant_name}</h3>
                  <p class="resto-info-description">${menu.description}</p>
                  <p class="resto-info-detail">${menu.google_maps_link}</p>
                  <p class="resto-info-detail">★ ${menu.rating}</p>
              </div>
              <div class="button-container">
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
              </div>
          </div>
        `;
      });

      // Add event listeners to dynamically added edit and delete buttons
      restoDataDiv
        .querySelectorAll(".edit-btn")
        .forEach((editButton, index) => {
          editButton.addEventListener("click", () => this.editResto(index));
        });

      restoDataDiv
        .querySelectorAll(".delete-btn")
        .forEach((deleteButton, index) => {
          deleteButton.addEventListener("click", () => this.deleteResto(index));
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      restoDataDiv.innerHTML = `<p class="error-msg">Failed to fetch data for ${provinsi}</p>`;
    }
  }
}

customElements.define("edit-resto", EditResto);
