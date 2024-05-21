class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__inner">
                <h1 class="hero__title">Membantu Temukan <br> Rasa Paling Enak</h1>
                <p class="hero__tagline"><span class="bold-text">NusantaRasa</span> hadir untuk temukan rasa terbaik untukmu <br> dari seluruh kuliner yang ada Indonesia</p>
                <button>Jelajahi</button>
                </div>
                
            <div class="hero-img-container">
                <img class="hero-img" src="https://www.goindonesiatours.com/wp-content/uploads/Indonesia-Traditional-Food-Top-10-Indonesia-Food-Must-try.jpg" alt="Hero Image">
            </div>
            </div>
          `;
    }
}

customElements.define('hero-bar', Hero);