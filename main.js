document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse-tracking Glow Effect for Bento Cards
    const bentoCards = document.querySelectorAll('.bento-card');

    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 2. Header Scroll Effect
    const nav = document.querySelector('.site-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Simple Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // 4. Terminal Simulation
    const terminal = document.getElementById('terminal');
    const logs = [
        '> System initialized in 54ms...',
        '> Fetching operational metrics...',
        '> Found 4 bottlenecks in Finance workflow.',
        '> Deploying autonomous bookkeeping agent...',
        '> Agent "AuditPro" active. Reconciling accounts...',
        '> 1,240 invoices processed automatically.',
        '> Efficiency increased by 42%.',
        '> System state: OPTIMIZED.',
        '> Awaiting next directive...'
    ];

    let logIndex = 0;

    function addLogLine() {
        if (logIndex < logs.length) {
            const line = document.createElement('div');
            line.className = 'line';
            line.textContent = logs[logIndex];
            terminal.appendChild(line);

            // Keep terminal scrolled to bottom
            terminal.scrollTop = terminal.scrollHeight;

            logIndex++;
            setTimeout(addLogLine, 1500 + Math.random() * 1000);
        } else {
            // Reset after a while for continuous loop
            setTimeout(() => {
                terminal.innerHTML = '<div class="line">> System re-scanning...</div>';
                logIndex = 0;
                addLogLine();
            }, 5000);
        }
    }

    // Start terminal after a short delay
    setTimeout(addLogLine, 2000);
});
