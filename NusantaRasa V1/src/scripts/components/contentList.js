class contentList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        
        `;
    }
}

customElements.define('content-list', contentList);