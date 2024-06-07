class EditResto extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="dashboard-content">
                    <div class="editResto">
                        <h2 class="editresto-title">Edit Restoran Berdasarkan Provinsi</h2>
                        <form id="editpage-form">
                            <label for="provinsi-select">Pilih Provinsi:</label>
                            <select id="provinsi-select" name="provinsi-select" required>
                                <option value="">Pilih Provinsi</option>
                            </select>
                        </form>
                        <div id="resto-data"></div>
                    </div>
                </div>
            </div>
        `;

        const provinces = [
            "Nanggroe Aceh Darussalam", "Sumatera Utara", "Sumatera Selatan",
            "Sumatera Barat", "Bengkulu", "Riau", "Kepulauan Riau", "Jambi",
            "Lampung", "Bangka Belitung", "Kalimantan Barat", "Kalimantan Timur",
            "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Utara", "Banten",
            "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Daerah Istimewa Yogyakarta",
            "Jawa Timur", "Bali", "Nusa Tenggara Timur", "Nusa Tenggara Barat", 
            "Gorontalo", "Sulawesi Barat", "Sulawesi Tengah", "Sulawesi Utara",
            "Sulawesi Tenggara", "Sulawesi Selatan", "Maluku Utara", "Maluku", "Papua"
        ];

        const provinsiSelect = this.querySelector("#provinsi-select");

        provinces.forEach(provinsi => {
            const option = document.createElement("option");
            option.value = provinsi;
            option.textContent = provinsi;
            provinsiSelect.appendChild(option);
        });

        this.querySelector("#provinsi-select").addEventListener('change', this.loadRestoData);
    }

    loadRestoData() {
        const provinsi = document.querySelector("#provinsi-select").value;
        if (provinsi) {
            const restoDataDiv = document.querySelector("#resto-data");

            // Contoh data restoran
            const restaurantDataArray = [
                {
                    foto: 'https://via.placeholder.com/150',
                    nama: 'Resto Contoh 1',
                    deskripsi: 'Deskripsi Resto Contoh 1',
                    lokasi: 'Jl. Contoh No.1, Kota Contoh',
                    rating: '4.5'
                },
                {
                    foto: 'https://via.placeholder.com/150',
                    nama: 'Resto Contoh 2',
                    deskripsi: 'Deskripsi Resto Contoh 2',
                    lokasi: 'Jl. Contoh No.2, Kota Contoh',
                    rating: '4.7'
                },
                {
                    foto: 'https://via.placeholder.com/150',
                    nama: 'Resto Contoh 3',
                    deskripsi: 'Deskripsi Resto Contoh 3',
                    lokasi: 'Jl. Contoh No.3, Kota Contoh',
                    rating: '4.8'
                }
            ];


        
            restoDataDiv.innerHTML = `
                <h3 class="dataresto-title">Data Restoran di ${provinsi}</h3>
            `;
            
            restaurantDataArray.forEach((restaurantData, index) => {
            restoDataDiv.innerHTML += `
                <div class="resto-container">
                    <img src="${restaurantData.foto}" alt="Foto Restoran" class="resto-image">
                    <div class="resto-info">
                        <h3 class="resto-info-title">${restaurantData.nama}</h3>
                        <p class="resto-info-description">${restaurantData.deskripsi}</p>
                        <p class="resto-info-detail">${restaurantData.lokasi}</p>
                        <p class="resto-info-detail">★ ${restaurantData.rating}</p>
                    </div>
                    <div class="button-container">
                        <button id="edit-btn">Edit</button>
                        <button id="delete-btn">Delete</button>
                    </div>
                </div>
            `;
        });

            document.querySelector("#edit-btn").addEventListener('click', this.editResto);
            document.querySelector("#delete-btn").addEventListener('click', this.deleteResto);
        }
    }

    editResto() {
        alert("Edit function is not implemented yet.");
    }

    deleteResto() {
        alert("Delete function is not implemented yet.");
    }
}

customElements.define('edit-resto', EditResto);
