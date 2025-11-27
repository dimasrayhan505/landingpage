document.addEventListener('DOMContentLoaded', function() {
    // 1. Toggle Menu Navigasi untuk Tampilan Mobile
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        // Toggle class 'active' untuk menampilkan/menyembunyikan menu
        navLinks.classList.toggle('active');
    });
    
    // 2. Efek Smooth Scrolling
    // Mengambil semua link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Jika ada menu mobile terbuka, tutup
            navLinks.classList.remove('active'); 
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Fungsi untuk Scroll ke Bagian tertentu (Dipanggil dari tombol CTA)
function scrollToSection(id) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}