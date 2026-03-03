document.addEventListener('DOMContentLoaded', () => {
    // ── 0. Theme Toggle ──────────────────────────────────────────────────────
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun');
    const moonIcon = themeToggle.querySelector('.moon');

    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateIcons(currentTheme);

    themeToggle.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcons(next);
    });

    // ── 1. Hero Typewriter Effect ─────────────────────────────────────────────
    const typewriterEl = document.getElementById('hero-typewriter');
    const words = ['Autonomous', 'Intelligent', 'AI-Native', 'Scalable', 'Unstoppable'];
    let wordIdx = 0;
    let charIdx = words[0].length; // start full — matches pre-filled HTML
    let isDeleting = true;         // start by deleting so it cycles naturally
    const TYPING_SPEED = 90;
    const DELETING_SPEED = 50;
    const PAUSE_AFTER = 2200;
    const PAUSE_BEFORE = 400;

    function typeLoop() {
        const full = words[wordIdx];

        if (!isDeleting) {
            typewriterEl.textContent = full.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === full.length) {
                isDeleting = true;
                setTimeout(typeLoop, PAUSE_AFTER);
                return;
            }
            setTimeout(typeLoop, TYPING_SPEED);
        } else {
            typewriterEl.textContent = full.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                setTimeout(typeLoop, PAUSE_BEFORE);
                return;
            }
            setTimeout(typeLoop, DELETING_SPEED);
        }
    }

    typeLoop();

    // ── 2. Mouse-tracking Glow Effect for Bento Cards ────────────────────────
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    // ── 3. Header Scroll Effect ───────────────────────────────────────────────
    const nav = document.querySelector('.site-nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── 4. Intersection Observer Animations ──────────────────────────────────
    const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ── 5. Terminal Simulation ────────────────────────────────────────────────
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
            terminal.scrollTop = terminal.scrollHeight;
            logIndex++;
            setTimeout(addLogLine, 1500 + Math.random() * 1000);
        } else {
            setTimeout(() => {
                terminal.innerHTML = '<div class="line">> System re-scanning...</div>';
                logIndex = 0;
                addLogLine();
            }, 5000);
        }
    }
    setTimeout(addLogLine, 2000);

    // ── 6. Chatbot Widget ─────────────────────────────────────────────────────
    const chatBtn = document.getElementById('chatbot-btn');
    const chatPanel = document.getElementById('chatbot-panel');
    const chatClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chatbot-input');
    const chatSend = document.getElementById('chatbot-send');
    const chatMsgs = document.getElementById('chatbot-messages');

    const DUMMY_REPLIES = [
        "Great question! wrrk.ai can help you automate that in minutes. 🚀",
        "I'm still learning, but our team can walk you through a full demo — want me to schedule one?",
        "wrrk.ai consolidates your entire ops stack. Have you tried our Unified Command Center?",
        "That's a perfect use-case for our autonomous agents. They run 24/7 so you don't have to!",
        "We're SOC2 Type II, HIPAA & GDPR compliant — your data stays locked down. 🔒",
        "Our AI handles bookkeeping, HR, and support simultaneously. What's your biggest bottleneck?",
        "Scaling teams love wrrk.ai for eliminating context-switching. Want a free trial?",
        "I'll pass that to the team! In the meantime, check out #features for a quick overview.",
    ];
    let replyIdx = 0;

    function toggleChat() {
        chatPanel.classList.toggle('open');
        if (chatPanel.classList.contains('open')) chatInput.focus();
    }

    chatBtn.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);

    function appendMessage(text, role) {
        const msgWrap = document.createElement('div');
        msgWrap.className = `chat-msg ${role}`;

        if (role === 'bot') {
            const icon = document.createElement('div');
            icon.className = 'chat-msg-icon';
            icon.textContent = '⚡';
            msgWrap.appendChild(icon);
        }

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = text;
        msgWrap.appendChild(bubble);

        chatMsgs.appendChild(msgWrap);
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
    }

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        appendMessage(text, 'user');
        chatInput.value = '';

        // Simulate typing delay
        setTimeout(() => {
            const reply = DUMMY_REPLIES[replyIdx % DUMMY_REPLIES.length];
            replyIdx++;
            appendMessage(reply, 'bot');
        }, 700 + Math.random() * 600);
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
