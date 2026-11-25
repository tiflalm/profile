document.addEventListener('DOMContentLoaded', () => {
    // 1. Set tahun otomatis di footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Toggle menu navigasi di layar HP
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // 3. Filter interaktif untuk kartu Experience & Projects
    function setupFilter(filterContainerId, cardSelector, displayMode) {
        const container = document.getElementById(filterContainerId);
        if (!container) return;

        const buttons = container.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll(cardSelector);

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = displayMode;
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    setupFilter('expFilters', '.exp-card', 'block');
    setupFilter('projectFilters', '.project-card', 'flex');

    // 4. Highlight menu navigasi aktif saat halaman di-scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navItem = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navItem) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navItem.classList.add('active');
                } else {
                    navItem.classList.remove('active');
                }
            }
        });
    });
});
