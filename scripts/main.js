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
		preview: 'https://junaa48.github.io/Aruma-Coffee/',
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

function initTabKeyboardNav(tablistEl) {
	if (!tablistEl) return;

	tablistEl.addEventListener('keydown', event => {
		const tabs = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
		if (!tabs.length) return;

		const currentIndex = tabs.indexOf(document.activeElement);
		if (currentIndex === -1) return;

		let nextIndex = null;
		if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
		else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
		else if (event.key === 'Home') nextIndex = 0;
		else if (event.key === 'End') nextIndex = tabs.length - 1;

		if (nextIndex !== null) {
			event.preventDefault();
			tabs[nextIndex].focus();
			tabs[nextIndex].click();
		}
	});
}

function getFocusableElements(container) {
	return Array.from(
		container.querySelectorAll(
			'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
		)
	).filter(el => !el.hidden && el.offsetParent !== null);
}

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
	const nav = document.getElementById('primary-nav');
	const backdrop = document.querySelector('.nav-backdrop');
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = Array.from(document.querySelectorAll('main section[id]'));

	if (!burger || !nav || !backdrop) return;

	const setMenuOpen = (isOpen, restoreFocus = false) => {
		const wasOpen = nav.classList.contains('nav-active');
		nav.classList.toggle('nav-active', isOpen);
		burger.classList.toggle('toggle-burger', isOpen);
		backdrop.classList.toggle('active', isOpen);
		document.body.classList.toggle('nav-open', isOpen);
		burger.setAttribute('aria-expanded', String(isOpen));

		if (isOpen && !wasOpen) {
			const firstLink = nav.querySelector('a');
			if (firstLink) firstLink.focus();
		} else if (!isOpen && wasOpen && restoreFocus) {
			burger.focus();
		}
	};

	burger.addEventListener('click', () => {
		setMenuOpen(!nav.classList.contains('nav-active'), true);
	});

	backdrop.addEventListener('click', () => setMenuOpen(false, true));
	navLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && nav.classList.contains('nav-active')) {
			setMenuOpen(false, true);
		}
	});

	const updateScrollState = () => {
		if (navbar) {
			navbar.classList.toggle('scrolled', window.scrollY > 12);
		}

		if (!sections.length) return;

		const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
		const scrollAnchor = window.scrollY + 140;
		let activeId = '';

		if (atBottom) {
			activeId = sections[sections.length - 1].id;
		} else {
			sections.forEach(section => {
				if (section.offsetTop <= scrollAnchor) {
					activeId = section.id;
				}
			});
		}

		navLinks.forEach(link => {
			const isActive = link.getAttribute('href') === `#${activeId}`;
			link.classList.toggle('active', isActive);
			if (isActive) {
				link.setAttribute('aria-current', 'location');
			} else {
				link.removeAttribute('aria-current');
			}
		});
	};

	window.addEventListener('scroll', updateScrollState, { passive: true });
	updateScrollState();
}

function initConsoleTabs() {
	const tablist = document.querySelector('.console-tabs');
	const tabs = document.querySelectorAll('[data-console-tab]');
	const output = document.getElementById('console-output');
	if (!tabs.length || !output) return;

	initTabKeyboardNav(tablist);

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			if (tab.classList.contains('active')) return;
			const key = tab.dataset.consoleTab;
			const profile = CONSOLE_PROFILES[key];
			if (!profile) return;

			tabs.forEach(btn => {
				const isCurrent = btn === tab;
				btn.classList.toggle('active', isCurrent);
				btn.setAttribute('aria-selected', String(isCurrent));
			});
			output.setAttribute('aria-labelledby', tab.id);
			output.classList.add('is-switching');
			renderConsoleProfile(output, profile);
		});
	});
}

function initProjectFilters() {
	const filterButtons = document.querySelectorAll('.filter-btn');
	const cards = document.querySelectorAll('.project-card');
	const filterStatus = document.getElementById('filter-status');
	if (!filterButtons.length || !cards.length) return;

	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			if (button.classList.contains('active')) return;
			const filter = button.dataset.filter;
			let visibleCount = 0;

			filterButtons.forEach(btn => {
				const isCurrent = btn === button;
				btn.classList.toggle('active', isCurrent);
				btn.setAttribute('aria-pressed', String(isCurrent));
			});

			cards.forEach(card => {
				const matches = filter === 'all' || card.dataset.category === filter;
				card.classList.toggle('is-hidden', !matches);
				if (!matches) {
					card.classList.remove('filter-enter');
					return;
				}

				visibleCount += 1;
				card.classList.add('show-anim', 'reveal-settled');
				card.classList.remove('filter-enter');
				void card.offsetWidth;
				card.classList.add('filter-enter');

				const onFilterAnimEnd = event => {
					if (event.target !== card) return;
					card.classList.remove('filter-enter');
					card.removeEventListener('animationend', onFilterAnimEnd);
				};
				card.addEventListener('animationend', onFilterAnimEnd);
			});

			if (filterStatus) {
				filterStatus.textContent =
					visibleCount === 1 ? 'Showing 1 project.' : `Showing ${visibleCount} projects.`;
			}
		});
	});
}

function initProjectModal() {
	const modal = document.getElementById('project-modal');
	const dialog = modal ? modal.querySelector('.modal-dialog') : null;
	const modalImageSlot = document.getElementById('modal-image-slot');
	const modalTabs = document.getElementById('modal-gallery-tabs');
	const modalBadge = document.getElementById('modal-badge');
	const modalTitle = document.getElementById('modal-title');
	const modalSummary = document.getElementById('modal-summary');
	const modalHighlights = document.getElementById('modal-highlights');
	const modalTech = document.getElementById('modal-tech');
	const modalGithub = document.getElementById('modal-github');
	const modalPreview = document.getElementById('modal-preview');
	const closeTriggers = document.querySelectorAll('[data-close-modal]');
	const openTriggers = document.querySelectorAll('[data-open-project]');

	if (!modal || !dialog || !modalImageSlot || !openTriggers.length) return;

	let lastTrigger = null;
	initTabKeyboardNav(modalTabs);

	const selectImage = (items, activeIndex) => {
		const active = items[activeIndex];
		if (!active) return;

		const img = document.createElement('img');
		img.src = active.src;
		img.alt = active.alt;
		modalImageSlot.replaceChildren(img);

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

		if (modalPreview) {
			if (project.preview) {
				modalPreview.href = project.preview;
				modalPreview.hidden = false;
			} else {
				modalPreview.href = '#';
				modalPreview.hidden = true;
			}
		}

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
				btn.setAttribute('aria-controls', 'modal-image-slot');
				btn.textContent = item.label;
				btn.addEventListener('click', () => selectImage(project.gallery, idx));
				return btn;
			})
		);

		modalTabs.hidden = project.gallery.length <= 1;
		selectImage(project.gallery, 0);

		modal.hidden = false;
		dialog.scrollTop = 0;
		document.body.classList.add('modal-open');
		const closeBtn = modal.querySelector('.modal-close');
		if (closeBtn) closeBtn.focus();
	};

	const closeModal = () => {
		if (modal.hidden) return;
		modal.hidden = true;
		document.body.classList.remove('modal-open');
		modalImageSlot.replaceChildren();
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
		if (modal.hidden) return;

		if (event.key === 'Escape') {
			closeModal();
			return;
		}

		if (event.key === 'Tab') {
			const focusables = getFocusableElements(dialog);
			if (!focusables.length) return;

			const first = focusables[0];
			const last = focusables[focusables.length - 1];

			if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	});
}

function createStatusIcon(kind) {
	const ns = 'http://www.w3.org/2000/svg';
	const svg = document.createElementNS(ns, 'svg');
	svg.setAttribute('width', '16');
	svg.setAttribute('height', '16');
	svg.setAttribute('viewBox', '0 0 24 24');
	svg.setAttribute('fill', 'none');
	svg.setAttribute('stroke', 'currentColor');
	svg.setAttribute('stroke-width', '2');
	svg.setAttribute('stroke-linecap', 'round');
	svg.setAttribute('stroke-linejoin', 'round');
	svg.setAttribute('aria-hidden', 'true');

	const circle = document.createElementNS(ns, 'circle');
	circle.setAttribute('cx', '12');
	circle.setAttribute('cy', '12');
	circle.setAttribute('r', '10');
	svg.appendChild(circle);

	if (kind === 'success') {
		const path = document.createElementNS(ns, 'path');
		path.setAttribute('d', 'm9 12 2 2 4-4');
		svg.appendChild(path);
	} else {
		const line1 = document.createElementNS(ns, 'path');
		line1.setAttribute('d', 'M12 8v4');
		const line2 = document.createElementNS(ns, 'path');
		line2.setAttribute('d', 'M12 16h.01');
		svg.appendChild(line1);
		svg.appendChild(line2);
	}

	return svg;
}

function initContactForm() {
	const form = document.getElementById('contact-form');
	if (!form) return;

	form.noValidate = true;

	const statusEl = document.getElementById('form-status');
	const submitBtn = form.querySelector('button[type="submit"]');
	const defaultBtnLabel = submitBtn ? submitBtn.textContent : 'Send Message';

	const fields = [
		{
			input: document.getElementById('contact-name'),
			errorEl: document.getElementById('error-name'),
			validate: val => (val.trim().length > 0 ? '' : 'Please enter your name.')
		},
		{
			input: document.getElementById('contact-email'),
			errorEl: document.getElementById('error-email'),
			validate: val => {
				const trimmed = val.trim();
				if (!trimmed) return 'Please enter your email address.';
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
					? ''
					: 'Enter a valid email address (for example, you@company.com).';
			}
		},
		{
			input: document.getElementById('contact-message'),
			errorEl: document.getElementById('error-message'),
			validate: val => (val.trim().length > 0 ? '' : 'Please add a short project description or message.')
		}
	];

	const setFieldError = (field, message) => {
		if (!field.input || !field.errorEl) return;
		if (message) {
			field.input.setAttribute('aria-invalid', 'true');
			field.errorEl.textContent = message;
			field.errorEl.hidden = false;
		} else {
			field.input.removeAttribute('aria-invalid');
			field.errorEl.textContent = '';
			field.errorEl.hidden = true;
		}
	};

	const setStatus = (kind, message) => {
		if (!statusEl) return;
		if (!message) {
			statusEl.hidden = true;
			statusEl.className = 'form-status';
			statusEl.replaceChildren();
			statusEl.removeAttribute('role');
			return;
		}

		statusEl.className = `form-status form-status-${kind}`;
		statusEl.setAttribute('role', kind === 'error' ? 'alert' : 'status');
		const span = document.createElement('span');
		span.textContent = message;
		statusEl.replaceChildren(createStatusIcon(kind), span);
		statusEl.hidden = false;
	};

	fields.forEach(field => {
		if (!field.input) return;
		field.input.addEventListener('input', () => {
			if (field.input.getAttribute('aria-invalid') === 'true') {
				setFieldError(field, field.validate(field.input.value));
			}
		});
	});

	form.addEventListener('submit', async event => {
		event.preventDefault();
		setStatus(null, '');

		let firstInvalid = null;
		fields.forEach(field => {
			if (!field.input) return;
			const err = field.validate(field.input.value);
			setFieldError(field, err);
			if (err && !firstInvalid) firstInvalid = field.input;
		});

		if (firstInvalid) {
			firstInvalid.focus();
			return;
		}

		if (submitBtn) {
			submitBtn.disabled = true;
			submitBtn.setAttribute('aria-busy', 'true');
			submitBtn.textContent = 'Sending...';
		}

		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});

			if (!response.ok) {
				throw new Error('Submission failed');
			}

			form.reset();
			fields.forEach(field => setFieldError(field, ''));
			setStatus('success', "Message sent. Thanks for reaching out — I'll reply by email soon.");
		} catch {
			setStatus(
				'error',
				'Could not send right now. Please try again or email arjunagustrinator123@gmail.com directly.'
			);
		} finally {
			if (submitBtn) {
				submitBtn.disabled = false;
				submitBtn.removeAttribute('aria-busy');
				submitBtn.textContent = defaultBtnLabel;
			}
		}
	});
}

/** Mark reveal elements settled after their entrance transition so card hover states stay snappy. */
function settleReveal(el) {
	if (!el || el.classList.contains('reveal-settled')) return;

	el.classList.add('show-anim');
	const finish = () => el.classList.add('reveal-settled');

	const onEnd = event => {
		if (event.target !== el || (event.propertyName !== 'opacity' && event.propertyName !== 'transform')) {
			return;
		}
		el.removeEventListener('transitionend', onEnd);
		finish();
	};

	el.addEventListener('transitionend', onEnd);
	window.setTimeout(finish, 1350);
}

/** Reveal sections and grid items on scroll while keeping off-JS and reduced-motion states visible. */
function initScrollReveal() {
	const elements = Array.from(document.querySelectorAll('.reveal'));
	if (!elements.length) return;

	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced || !('IntersectionObserver' in window)) {
		document.documentElement.classList.remove('js-anim');
		elements.forEach(el => {
			el.classList.add('show-anim', 'reveal-settled');
		});
		return;
	}

	const pending = new Set();

	const revealNow = (el, immediate = false) => {
		pending.delete(el);
		if (immediate) {
			el.classList.add('show-anim', 'reveal-settled');
			return;
		}
		settleReveal(el);
	};

	const observer = new IntersectionObserver(
		(entries, instance) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				revealNow(entry.target);
				instance.unobserve(entry.target);
			});
		},
		{ root: null, rootMargin: '0px 0px -48px 0px', threshold: 0.14 }
	);

	const checkScrolledPastOrBottom = () => {
		if (!pending.size) return;
		const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16;

		pending.forEach(el => {
			if (el.classList.contains('reveal-settled')) {
				pending.delete(el);
				observer.unobserve(el);
				return;
			}
			const rect = el.getBoundingClientRect();
			if (rect.bottom <= 0) {
				revealNow(el, true);
				observer.unobserve(el);
			} else if (nearBottom || rect.top <= window.innerHeight * 0.85) {
				revealNow(el);
				observer.unobserve(el);
			}
		});

		if (!pending.size) {
			window.removeEventListener('scroll', checkScrolledPastOrBottom);
		}
	};

	elements.forEach(el => {
		const rect = el.getBoundingClientRect();
		if (rect.bottom <= 0) {
			el.classList.add('show-anim', 'reveal-settled');
			return;
		}
		pending.add(el);
		observer.observe(el);
	});

	window.addEventListener('scroll', checkScrolledPastOrBottom, { passive: true });
}

initNavigation();
initConsoleTabs();
initProjectFilters();
initProjectModal();
initContactForm();
initScrollReveal();
