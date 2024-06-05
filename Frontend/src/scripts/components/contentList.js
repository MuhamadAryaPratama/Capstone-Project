class contentList extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <section id="jelajahi">
        <div class="jelajahi-inner">
          <h2>Jelajahi Rasamu</h2>
          <p>Pilih provinsi dimana kamu berada, lalu klik jelajahi. Jelajahi rekomendasi kuliner dari kami</p>
        </div>
        <div class="jelajahi-pilih">
          <select class="form-select" aria-label="Default select example" id="provinceSelect">
            <option value="" selected>Pilih Provinsi</option>
            <option value="aceh">Nanggroe Aceh Darussalam</option>
            <option value="sumut">Sumatera Utara</option>
            <!-- Add more options here for other provinces -->
          </select>
          <button class="btn btn-primary" id="exploreButton">Jelajahi</button>
        </div>
      </section>
    `;
  }

  addEventListeners() {
    const exploreButton = this.querySelector("#exploreButton");
    const provinceSelect = this.querySelector("#provinceSelect");

    exploreButton.addEventListener("click", () => {
      const selectedProvince = provinceSelect.value;
      if (selectedProvince) {
        window.location.href = `#${selectedProvince}`;
      } else {
        alert("Silakan pilih provinsi terlebih dahulu!");
      }
    });
  }
}

customElements.define("content-list", contentList);
