// --- BURGER MENU LOGIC ---
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('nav');
	const navLinks = document.querySelectorAll('nav ul li a');

	// Toggle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		// Burger Animation
		burger.classList.toggle('toggle-burger');
	});

	// Tutup nav ketika link di klik (untuk mobile)
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active');
			burger.classList.remove('toggle-burger');
		});
	});
};

navSlide();

// --- ANIMATION ON SCROLL LOGIC ---
// Menggunakan Intersection Observer API untuk memantau elemen ketika masuk layar
const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.15 // Animasi mulai saat 15% dari elemen terlihat
};

const observer = new IntersectionObserver((entries, observerInstance) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Tambahkan class 'show-anim' untuk memutar animasi CSS
			entry.target.classList.add('show-anim');
			// Berhenti memantau setelah animasi berjalan (berjalan sekali)
			observerInstance.unobserve(entry.target);
		}
	});
}, observerOptions);

// Pilih semua elemen yang punya class animasi
const animatedElements = document.querySelectorAll('.anim-fade-up, .anim-slide-left, .anim-slide-right');

// Terapkan observer ke setiap elemen
animatedElements.forEach(el => {
	// Jangan observer jika elemen ada di header (biar langsung animasi saat pertama buka)
	if (!el.closest('header')) {
		observer.observe(el);
	}
});
