import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css'; // Menggunakan path relatif dari direktori index.js
import '../styles/responsive.css'; // Menggunakan path relatif dari direktori index.js
import './components/headerBar.js';
import './components/hero.js';
import './components/aboutUs.js'; 
import './components/footerBar.js';
import { loadContent } from './routes/router.js';
import { initApp } from './views/app.js'; // Impor initApp dari app.js

// Panggil fungsi inisialisasi ketika DOM siap
document.addEventListener('DOMContentLoaded', initApp);
