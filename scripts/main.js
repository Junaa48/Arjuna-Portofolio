const CONSOLE_PROFILES = {
	mobile: {
		role: 'Mobile App Developer',
		primaryStack: ['Flutter', 'Dart', 'Riverpod'],
		features: ['GPS Geofencing', 'Secure Storage', 'REST Integration'],
		featuredWork: 'AttendFlow Android App'
	},
	backend: {
		role: 'Full-Stack & Backend Engineer',
		primaryStack: ['PHP', 'Laravel', 'NestJS', 'Next.js'],
		databases: ['PostgreSQL', 'MySQL', 'MongoDB (NoSQL)'],
		features: ['REST APIs', 'Argon2id Auth', 'Admin Dashboards'],
		featuredWork: 'AttendFlow API & Web Admin'
	},
	ai: {
		role: 'AI Agent & Automation Builder',
		primaryStack: ['LangGraph', 'Node.js', 'Python'],
		features: ['47-Tool Registry', 'Document Export', 'Claim Evaluation'],
		featuredWork: 'Kafka WhatsApp AI Agent'
	}
};

const PROJECTS = {
	attendflow: {
		badge: 'Mobile & Full-Stack',
		badgeClass: 'project-badge',
		title: 'AttendFlow — GPS Attendance Platform',
		summary:
			'Full-stack employee attendance system uniting a Flutter Android app, a Next.js + Leaflet web admin dashboard, and a NestJS + PostgreSQL REST API that enforces all attendance rules on the server.',
		highlights: [
			'Flutter Android app built with Riverpod, Dio, go_router, geolocator, and encrypted flutter_secure_storage.',
			'Next.js 16 + React 19 + Tailwind CSS 4 web admin with interactive Leaflet workplace mapping and Excel export.',
			'NestJS 12 + TypeScript + Prisma 7 + PostgreSQL 17 REST API featuring Argon2id password hashing and rotating refresh tokens.',
			'Production Docker Compose + Caddy deployment with automatic HTTPS and isolated service networking.'
		],
		tech: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Docker'],
		repo: 'https://github.com/Junaa48/AttendFlow',
		gallery: [
			{
				label: 'Web Dashboard',
				src: 'images/projects/attendflow-dashboard.png',
				alt: 'AttendFlow web admin dashboard'
			},
			{
				label: 'Flutter Mobile',
				src: 'images/projects/attendflow-mobile.png',
				alt: 'AttendFlow Flutter Android check-in interface'
			},
			{
				label: 'Workplaces',
				src: 'images/projects/attendflow-workplaces.png',
				alt: 'AttendFlow workplace radius configuration table'
			}
		]
	},
	kafka: {
		badge: 'AI Agent & Automation',
		badgeClass: 'project-badge',
		title: 'Kafka — WhatsApp Bot with AI Agent',
		summary:
			'Intelligent WhatsApp assistant built with Node.js (Baileys) and LangGraph, connecting conversational natural language to 47 guarded tools, document pipelines, and web research verification.',
		highlights: [
			'LangGraph tool-calling agent with 47 registered tools, intent negation parsing, and one-time 2-minute confirmation guardrails.',
			'Generates formatted PDF, DOCX, PPTX, and XLSX files plus Satori/Sharp rich image menu cards for WhatsApp.',
			'Three-tier persistent memory (user, group, global), automated chat summarization, and group moderation.',
			'Grounded web research pipeline with claim-support filtering, Python evaluation scripts, and an Express web admin panel.'
		],
		tech: ['Node.js', 'LangGraph', 'Baileys', 'Python', 'Express', 'Satori', 'Sharp'],
		repo: 'https://github.com/Junaa48/whatsapp-bot',
		gallery: [
			{
				label: 'Agent & Chat Mockup',
				src: 'images/projects/kafka-bot-mockup.svg',
				alt: 'Kafka WhatsApp AI Agent chat and architecture mockup'
			}
		]
	},
	aruma: {
		badge: 'Frontend & Motion UI',
		badgeClass: 'project-badge',
		title: 'Aruma Coffee — Specialty Cafe Web',
		summary:
			'Editorial landing page for a Makassar specialty coffee brand built with HTML5, Tailwind CSS, JavaScript, and GSAP motion choreography.',
		highlights: [
			'GSAP + ScrollTrigger animations including a staggered preloader, parallax hero backdrop, and scroll-revealed sections.',
			'Interactive categorized menu tabs (Coffee, Non-Coffee, Pastry) paired with a quick-view product modal.',
			'Custom desktop cursor, dual-track running marquee, and WebP-optimized imagery with responsive mobile navigation.'
		],
		tech: ['HTML5', 'Tailwind CSS', 'CSS3', 'JavaScript', 'GSAP', 'ScrollTrigger'],
		repo: 'https://github.com/Junaa48/Aruma-Coffee',
		gallery: [
			{
				label: 'Hero Experience',
				src: 'images/projects/aruma-coffee-hero.webp',
				alt: 'Aruma Coffee hero showcase'
			},
			{
				label: 'Barista Craft',
				src: 'images/projects/aruma-coffee-craft.webp',
				alt: 'Aruma Coffee barista craft visual'
			}
		]
	}
};

function renderConsoleProfile(outputEl, profile) {
	const pre = document.createElement('pre');
	const code = document.createElement('code');

	const appendText = text => code.appendChild(document.createTextNode(text));
	const appendSpan = (cls, text) => {
		const span = document.createElement('span');
		span.className = cls;
		span.textContent = text;
		code.appendChild(span);
	};

	const entries = Object.entries(profile);
	appendText('{\n');
	entries.forEach(([key, value], index) => {
		appendText('  ');
		appendSpan('code-key', `"${key}"`);
		appendText(': ');
		if (Array.isArray(value)) {
			appendText('[');
			value.forEach((item, itemIdx) => {
				appendSpan('code-str', `"${item}"`);
				if (itemIdx < value.length - 1) appendText(', ');
			});
			appendText(']');
		} else {
			appendSpan('code-str', `"${value}"`);
		}
		appendText(index < entries.length - 1 ? ',\n' : '\n');
	});
	appendText('}');

	pre.appendChild(code);
	outputEl.replaceChildren(pre);
}

function initNavigation() {
	const navbar = document.getElementById('navbar');
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('nav');
	const backdrop = document.querySelector('.nav-backdrop');
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = document.querySelectorAll('main section[id]');

	if (!burger || !nav || !backdrop) return;

	const setMenuOpen = isOpen => {
		nav.classList.toggle('nav-active', isOpen);
		burger.classList.toggle('toggle-burger', isOpen);
		backdrop.classList.toggle('active', isOpen);
		burger.setAttribute('aria-expanded', String(isOpen));
	};

	burger.addEventListener('click', () => {
		const isOpen = !nav.classList.contains('nav-active');
		setMenuOpen(isOpen);
	});

	backdrop.addEventListener('click', () => setMenuOpen(false));
	navLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && nav.classList.contains('nav-active')) {
			setMenuOpen(false);
		}
	});

	const updateScrollState = () => {
		if (navbar) {
			navbar.classList.toggle('scrolled', window.scrollY > 12);
		}

		const scrollAnchor = window.scrollY + 140;
		let activeId = '';
		sections.forEach(section => {
			if (section.offsetTop <= scrollAnchor) {
				activeId = section.id;
			}
		});

		navLinks.forEach(link => {
			const isActive = link.getAttribute('href') === `#${activeId}`;
			link.classList.toggle('active', isActive);
		});
	};

	window.addEventListener('scroll', updateScrollState, { passive: true });
	updateScrollState();
}

function initConsoleTabs() {
	const tabs = document.querySelectorAll('[data-console-tab]');
	const output = document.getElementById('console-output');
	if (!tabs.length || !output) return;

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const key = tab.dataset.consoleTab;
			const profile = CONSOLE_PROFILES[key];
			if (!profile) return;

			tabs.forEach(btn => {
				const isCurrent = btn === tab;
				btn.classList.toggle('active', isCurrent);
				btn.setAttribute('aria-selected', String(isCurrent));
			});
			renderConsoleProfile(output, profile);
		});
	});
}

function initProjectFilters() {
	const filterButtons = document.querySelectorAll('.filter-btn');
	const cards = document.querySelectorAll('.project-card');
	if (!filterButtons.length || !cards.length) return;

	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			const filter = button.dataset.filter;

			filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
			cards.forEach(card => {
				const matches = filter === 'all' || card.dataset.category === filter;
				card.classList.toggle('is-hidden', !matches);
				if (matches) {
					card.classList.add('show-anim');
				}
			});
		});
	});
}

function initProjectModal() {
	const modal = document.getElementById('project-modal');
	const modalImage = document.getElementById('modal-image');
	const modalTabs = document.getElementById('modal-gallery-tabs');
	const modalBadge = document.getElementById('modal-badge');
	const modalTitle = document.getElementById('modal-title');
	const modalSummary = document.getElementById('modal-summary');
	const modalHighlights = document.getElementById('modal-highlights');
	const modalTech = document.getElementById('modal-tech');
	const modalGithub = document.getElementById('modal-github');
	const closeTriggers = document.querySelectorAll('[data-close-modal]');
	const openTriggers = document.querySelectorAll('[data-open-project]');

	if (!modal || !openTriggers.length) return;

	let lastTrigger = null;

	const selectImage = (items, activeIndex) => {
		const active = items[activeIndex];
		if (!active) return;

		modalImage.src = active.src;
		modalImage.alt = active.alt;

		Array.from(modalTabs.children).forEach((btn, idx) => {
			const isSelected = idx === activeIndex;
			btn.classList.toggle('active', isSelected);
			btn.setAttribute('aria-selected', String(isSelected));
		});
	};

	const openModal = (projectId, triggerEl) => {
		const project = PROJECTS[projectId];
		if (!project) return;

		lastTrigger = triggerEl;
		modalBadge.className = project.badgeClass;
		modalBadge.textContent = project.badge;
		modalTitle.textContent = project.title;
		modalSummary.textContent = project.summary;
		modalGithub.href = project.repo;

		modalHighlights.replaceChildren(
			...project.highlights.map(text => {
				const li = document.createElement('li');
				li.textContent = text;
				return li;
			})
		);

		modalTech.replaceChildren(
			...project.tech.map(name => {
				const li = document.createElement('li');
				li.textContent = name;
				return li;
			})
		);

		modalTabs.replaceChildren(
			...project.gallery.map((item, idx) => {
				const btn = document.createElement('button');
				btn.type = 'button';
				btn.className = 'gallery-tab';
				btn.setAttribute('role', 'tab');
				btn.textContent = item.label;
				btn.addEventListener('click', () => selectImage(project.gallery, idx));
				return btn;
			})
		);

		modalTabs.hidden = project.gallery.length <= 1;
		selectImage(project.gallery, 0);

		modal.hidden = false;
		document.body.classList.add('modal-open');
		const closeBtn = modal.querySelector('.modal-close');
		if (closeBtn) closeBtn.focus();
	};

	const closeModal = () => {
		if (modal.hidden) return;
		modal.hidden = true;
		document.body.classList.remove('modal-open');
		if (lastTrigger) {
			lastTrigger.focus();
			lastTrigger = null;
		}
	};

	openTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			openModal(trigger.dataset.openProject, trigger);
		});
	});

	closeTriggers.forEach(trigger => trigger.addEventListener('click', closeModal));

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && !modal.hidden) {
			closeModal();
		}
	});
}

function initScrollReveal() {
	const elements = document.querySelectorAll('.reveal');
	if (!elements.length) return;

	if (!('IntersectionObserver' in window)) {
		elements.forEach(el => el.classList.add('show-anim'));
		return;
	}

	const observer = new IntersectionObserver(
		(entries, instance) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('show-anim');
				instance.unobserve(entry.target);
			});
		},
		{ root: null, rootMargin: '0px', threshold: 0.12 }
	);

	elements.forEach(el => {
		if (!el.closest('header')) {
			observer.observe(el);
		}
	});
}

initNavigation();
initConsoleTabs();
initProjectFilters();
initProjectModal();
initScrollReveal();
