class contentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="jelajahi">
        <div class="jelajahi-inner">
            <h2>Jelajahi Rasamu</h2>
            <p>Pilih provinsi dimana kamu berada, lalu klik jelajahi. Jelajahi rekomendasi kuliner dari kami</p>
        </div>

        <div class="jelajahi-pilih">
        <select class="form-select" aria-label="Default select example">
          <option selected>Pilih Provinsi</option>
        </select>
        </div>

        </section>
        `;
  }
}

customElements.define('content-list', contentList);
