

class AddNewResto extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="dashboard-content">
                    <div class="addnew-resto">
                        <h2 class="addnew-title">Tambah Restoran Baru</h2>
                        <form id="addnew-form">
                            <label for="nama-resto">Nama Resto:</label>
                            <input type="text" id="nama-resto" name="nama-resto" required>
                            <label for="deskripsi">Deskripsi:</label>
                            <textarea id="deskripsi" name="deskripsi" required></textarea>
                            <label for="rating">Rating:</label>
                            <input type="number" id="rating" name="rating" min="1" max="5" required>
                            <label for="link-gmaps">Link Google Maps:</label>
                            <input type="url" id="link-gmaps" name="link-gmaps" required>
                            <label for="foto">Foto:</label>
                            <input type="file" id="foto" name="foto" accept="image/*" required>
                            <label for="provinsi">Provinsi:</label>
                            <select id="provinsi" name="provinsi" required>
                                <option value="">Pilih Provinsi</option>
                            </select>
                            <button type="button" id="submit-btn">Submit</button>
                        </form>
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

        const provinsiSelect = this.querySelector("#provinsi");

        provinces.forEach(provinsi => {
            const option = document.createElement("option");
            option.value = provinsi;
            option.textContent = provinsi;
            provinsiSelect.appendChild(option);
        });

        this.querySelector("#submit-btn").addEventListener('click', this.submitForm);
    }

    submitForm() {
        const form = document.querySelector("#addnew-form");
        if (form.checkValidity()) {
            alert("Success! All data is filled.");
        } else {
            alert("Fail! Please fill all the data.");
        }
    }
}

customElements.define('add-new-resto', AddNewResto);