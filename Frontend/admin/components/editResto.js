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

      restaurantDataArray.forEach((menu, index) => {
        restoDataDiv.innerHTML += `
          <div class="resto-container" data-index="${index}">
            <div class="resto-info">
              <h3 class="resto-info-title">${menu.restaurant_name}</h3>
              <p class="resto-info-description">${menu.description}</p>
              <p class="resto-info-detail"><a href="${menu.google_maps_link}" target="_blank">Google Maps</a></p>
              <p class="resto-info-detail">★ ${menu.rating}</p>
            </div>
            <div class="button-container">
              <button class="edit-btn" data-index="${index}">Edit</button>
              <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
          </div>
        `;
      });

      // Add event listeners to dynamically added edit and delete buttons
      restoDataDiv.querySelectorAll(".edit-btn").forEach((editButton) => {
        editButton.addEventListener("click", (event) => this.editResto(event));
      });

      restoDataDiv.querySelectorAll(".delete-btn").forEach((deleteButton) => {
        deleteButton.addEventListener("click", (event) => this.deleteResto(event));
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      restoDataDiv.innerHTML = `<p class="error-msg">Failed to fetch data for ${provinsi}</p>`;
    }
  }

  //Edit Resto
  async editResto(event) {
    const index = event.target.dataset.index;
    const restoDataDiv = document.querySelector(`#resto-data .resto-container[data-index="${index}"] .resto-info`);

    const currentName = restoDataDiv.querySelector(".resto-info-title").textContent;
    const currentDescription = restoDataDiv.querySelector(".resto-info-description").textContent;
    const currentGoogleMapsLink = restoDataDiv.querySelector(".resto-info-detail a").href;
    const currentRating = restoDataDiv.querySelector(".resto-info-detail:last-child").textContent.slice(2);

    const { value: formValues } = await Swal.fire({
      title: 'Edit Restaurant',
      html:
        `<label for="swal-input1">Name</label><input id="swal-input1" class="swal2-input" value="${currentName}">
         <label for="swal-input2">Description</label><input id="swal-input2" class="swal2-input" value="${currentDescription}">
         <label for="swal-input3">Google Maps Link</label><input id="swal-input3" class="swal2-input" value="${currentGoogleMapsLink}">
         <label for="swal-input4">Rating</label><input id="swal-input4" class="swal2-input" value="${currentRating}">`,
      focusConfirm: false,
      customClass: {
        popup: 'swal2-green-popup',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-green-button',
        input: 'swal2-input'
      },
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    });

    if (formValues) {
      const [newName, newDescription, newGoogleMapsLink, newRating] = formValues;

      if (newName && newDescription && newGoogleMapsLink && newRating) {
        try {
          const response = await fetch(`http://localhost:4000/edit/${index}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ newName, newDescription, newGoogleMapsLink, newRating })
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          // Update Resto
          restoDataDiv.querySelector(".resto-info-title").textContent = newName;
          restoDataDiv.querySelector(".resto-info-description").textContent = newDescription;
          restoDataDiv.querySelector(".resto-info-detail a").href = newGoogleMapsLink;
          restoDataDiv.querySelector(".resto-info-detail a").textContent = "Google Maps";
          restoDataDiv.querySelector(".resto-info-detail:last-child").textContent = `★ ${newRating}`;
        } catch (error) {
          console.error("Error updating data:", error);
          Swal.fire('Error', 'Failed to update restaurant data.', 'error');
        }
      }
    }
  }

  async deleteResto(event) {
    const index = event.target.dataset.index;
    const restoDataDiv = document.querySelector(`#resto-data .resto-container[data-index="${index}"]`);

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:4000/delete/${index}`, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Remove Resto
        restoDataDiv.remove();
        Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire('Error', 'Failed to delete restaurant data.', 'error');
      }
    }
  }
}

customElements.define("edit-resto", EditResto);
