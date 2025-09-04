
    // Theme toggle (remembers choice)
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') { root.classList.add('light'); }
    document.getElementById('themeBtn').addEventListener('click', () => {
        root.classList.toggle('light');
        localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });

    // Smooth scrolling for anchor links (native in most browsers, fallback here)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // Back to top button
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
        toTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Projects filter
    const grid = document.getElementById('projectGrid');
    document.querySelectorAll('.filters [data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const f = btn.getAttribute('data-filter');
            grid.querySelectorAll('.project').forEach(p => {
                const tags = p.dataset.tags || '';
                p.style.display = (f === 'all' || tags.includes(f)) ? 'grid' : 'none';
            });
        });
    });

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Optional: Structured data for SEO
    const ld = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Akshay Jamnis",
        "jobTitle": "Student • Developer",
        "url": document.location.href,
        "email": "mailto:you@example.com",
        "sameAs": ["https://github.com/yourusername", "https://www.linkedin.com/in/yourprofile"],
        "knowsAbout": ["Python", "C++", "Computer Vision", "Data Engineering", "Web Development"]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
