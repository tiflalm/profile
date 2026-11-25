document.addEventListener('DOMContentLoaded', () => {
    // 1. Tahun otomatis di footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // 3. Recruiter Role Lens Switcher di Hero
    const lensData = {
        all: {
            headline: "IT Support | Technical Support | IT Infrastructure & Networking | Computer Vision & AI",
            pitch: "Versatile engineer turning complex technical operations into reliable systems—from live national broadcasts at <strong>detikcom</strong> and <strong>149,821.2 kWh</strong> industrial energy digitization to patent-registered <strong>real-time Computer Vision AI</strong>."
        },
        support: {
            headline: "IT Support & Technical Support Specialist — Live Broadcast, Lab & End-User Operations",
            pitch: "Google IT Support Certified engineer with hands-on incident troubleshooting at <strong>detikcom</strong> (vMix, OBS, Wirecast, ATEM, AnyDesk) and 1.5 years mentoring <strong>100+ students per batch</strong> across 6 computer hardware, OS, and database labs."
        },
        infra: {
            headline: "IT Infrastructure, Network Security & Smart Building Integration Engineer",
            pitch: "<strong>Huawei HCIA-Security (1000/1000)</strong>, <strong>HCIA-Datacom (905/1000)</strong>, and <strong>Cisco CCNAv7 & CyberOps</strong> certified specialist experienced in IPsec VPNs, iptables, Wireshark, IIoT Building Automation (Kemnaker RI), and ISO 45001:2018 electrical systems."
        },
        ai: {
            headline: "Computer Vision & Applied AI Engineer — Registered Patent Holder (SIPEKA)",
            pitch: "Co-inventor of <strong>SIPEKA (Patent EC002026058674)</strong> and <strong>3rd Place Winner at Huawei ICT Competition</strong>. Engineered a real-time driver drowsiness detection system using YOLOv8, Dlib, and OpenCV achieving <strong>91.5% mAP at 25 FPS (4 ms latency)</strong>."
        }
    };

    const lensBtns = document.querySelectorAll('.lens-btn');
    const headlineEl = document.getElementById('dynamicHeadline');
    const pitchEl = document.getElementById('dynamicPitch');

    lensBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            lensBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const key = btn.getAttribute('data-lens');
            if (lensData[key]) {
                headlineEl.textContent = lensData[key].headline;
                pitchEl.innerHTML = lensData[key].pitch;
            }
        });
    });

    // 4. Interactive Career Explorer Tabs
    const careerTabs = document.querySelectorAll('.career-tab');
    const careerPanels = document.querySelectorAll('.career-panel');

    careerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            careerTabs.forEach(t => t.classList.remove('active'));
            careerPanels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-target'));
            if (target) target.classList.add('active');
        });
    });

    // 5. Credential Vault Filter
    const credBtns = document.querySelectorAll('#credFilters .filter-btn');
    const credCards = document.querySelectorAll('#credGrid .cred-card');

    credBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            credBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            credCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
            });
        });
    });
});
