import { parseHash } from './url_parser.js';

const routes = {
    'home': `
        <header-bar></header-bar>
        <hero-bar></hero-bar>
        <about-us></about-us>
    `,
};


const loadContent = () => {
    const mainPost = document.getElementById('main-post');
    const hash = parseHash();

    // Muat konten dinamis berdasarkan rute
    //mainPost.innerHTML = Object.values(routes).join('');
    //mainPost.innerHTML = routes[route] || routes['home'];
    // Muat konten dinamis berdasarkan rute
    mainPost.innerHTML = `
        ${routes[hash] || routes['home']}
    `;

    // Gulir ke bagian yang sesuai
    if (hash && document.getElementById(hash)) {
        document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
    }
};

export { loadContent };
