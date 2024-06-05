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
  
          </section>
          `;
  }
}

customElements.define('kuliner-terpopuler', kulinerTerpopuler);
