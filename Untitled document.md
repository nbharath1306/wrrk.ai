\<\!DOCTYPE html\>  
\<html lang="en" data-theme="light"\>  
\<head\>  
    \<meta charset="UTF-8"\>  
    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
    \<title\>wrrk.ai | The Complete Organizational Operating System\</title\>  
    \<link rel="preconnect" href="https://fonts.googleapis.com"\>  
    \<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin\>  
    \<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700\&family=JetBrains+Mono:wght@400;500\&family=Instrument+Serif:ital@0;1\&display=swap" rel="stylesheet"\>  
    \<style\>  
        :root {  
            /\* archzOS Design Tokens \*/  
            \--brand-blue: \#4285F4;  
            \--brand-blue-hover: \#3367D6;  
            \--brand-blue-subtle: \#E8F0FE;  
            \--bg-root: \#FFFFFF;  
            \--bg-surface: \#F8F9FA;  
            \--bg-sidebar: \#F1F3F4;  
            \--text-main: \#202124;  
            \--text-muted: \#5F6368;  
            \--border-subtle: \#DADCE0;  
            \--radius-md: 10px;  
            \--radius-lg: 14px;  
            \--font-body: 'DM Sans', sans-serif;  
            \--font-display: 'Instrument Serif', serif;  
            \--font-mono: 'JetBrains Mono', monospace;  
            \--shadow-card: 0 1px 3px rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15);  
        }

        \[data-theme="dark"\] {  
            \--bg-root: \#121212;  
            \--bg-surface: \#1E1E1E;  
            \--bg-sidebar: \#2D2D2D;  
            \--text-main: \#E8EAED;  
            \--text-muted: \#9AA0A6;  
            \--border-subtle: \#3C4043;  
        }

        \* { box-sizing: border-box; margin: 0; padding: 0; }  
        body {  
            font-family: var(--font-body);  
            background: var(--bg-root);  
            color: var(--text-main);  
            line-height: 1.5;  
            \-webkit-font-smoothing: antialiased;  
        }

        .container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }

        /\* Navigation \*/  
        .nav {  
            height: 64px;  
            display: flex;  
            align-items: center;  
            border-bottom: 1px solid var(--border-subtle);  
            background: var(--bg-root);  
            position: sticky;  
            top: 0;  
            z-index: 100;  
        }  
        .nav-inner { width: 100%; display: flex; justify-content: space-between; align-items: center; }  
        .brand { font-family: var(--font-display); font-size: 26px; font-weight: 500; color: var(--brand-blue); display: flex; align-items: center; gap: 8px; }  
        .brand-dot { width: 12px; height: 12px; background: var(--brand-blue); border-radius: 3px; }

        /\* Hero \*/  
        .hero { padding: 96px 0 64px; text-align: center; }  
        .hero h1 {  
            font-family: var(--font-display);  
            font-size: clamp(48px, 8vw, 84px);  
            line-height: 0.95;  
            letter-spacing: \-0.02em;  
            margin-bottom: 24px;  
            font-style: italic;  
        }  
        .hero p { font-size: 20px; color: var(--text-muted); max-width: 640px; margin: 0 auto 40px; }

        /\* Buttons \*/  
        .btn {  
            padding: 12px 24px;  
            border-radius: var(--radius-full);  
            font-weight: 500;  
            cursor: pointer;  
            transition: 0.2s;  
            display: inline-flex;  
            align-items: center;  
            text-decoration: none;  
            font-size: 15px;  
        }  
        .btn-primary { background: var(--brand-blue); color: white; border: none; }  
        .btn-primary:hover { background: var(--brand-blue-hover); box-shadow: 0 1px 2px rgba(0,0,0,0.2); }  
        .btn-outline { border: 1px solid var(--border-subtle); color: var(--brand-blue); background: transparent; }  
        .btn-outline:hover { background: var(--brand-blue-subtle); }

        /\* Compare Section \*/  
        .section { padding: 80px 0; }  
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 48px; }  
        .card {  
            padding: 40px;  
            border-radius: var(--radius-lg);  
            border: 1px solid var(--border-subtle);  
            background: var(--bg-surface);  
        }  
        .card-pro { border: 2px solid var(--brand-blue); background: var(--bg-root); box-shadow: var(--shadow-card); }

        /\* UI Mockup \*/  
        .mockup {  
            background: var(--bg-sidebar);  
            border: 1px solid var(--border-subtle);  
            border-radius: var(--radius-lg);  
            overflow: hidden;  
            display: flex;  
            box-shadow: var(--shadow-card);  
            margin-top: 40px;  
        }  
        .mockup-side { width: 200px; padding: 20px; border-right: 1px solid var(--border-subtle); }  
        .mockup-content { flex: 1; background: var(--bg-root); padding: 40px; }  
          
        /\* Utility \*/  
        .badge {  
            background: var(--brand-blue-subtle);  
            color: var(--brand-blue);  
            padding: 4px 12px;  
            border-radius: var(--radius-full);  
            font-size: 12px;  
            font-weight: 700;  
            text-transform: uppercase;  
            letter-spacing: 0.05em;  
        }

        @media (max-width: 768px) {  
            .compare-grid { grid-template-columns: 1fr; }  
            .hero h1 { font-size: 48px; }  
        }  
    \</style\>  
\</head\>  
\<body\>

\<nav class="nav"\>  
    \<div class="container nav-inner"\>  
        \<div class="brand"\>\<div class="brand-dot"\>\</div\> wrrk.ai\</div\>  
        \<div style="display: flex; gap: 24px; align-items: center;"\>  
            \<a href="\#features" style="text-decoration:none; color:var(--text-muted); font-size:14px;"\>Features\</a\>  
            \<a href="\#" class="btn btn-outline" style="padding: 8px 16px;"\>Sign In\</a\>  
            \<a href="\#" class="btn btn-primary" style="padding: 8px 16px;"\>Get Started\</a\>  
        \</div\>  
    \</div\>  
\</nav\>

\<section class="hero container"\>  
    \<span class="badge"\>archzOS powered\</span\>  
    \<h1\>The operating system for teams that \<br\>\<em\>actually get things done.\</em\>\</h1\>  
    \<p\>Unified CRM, automated messaging, and autonomous AI agents integrated into a single, high-performance interface.\</p\>  
    \<div style="display: flex; gap: 16px; justify-content: center;"\>  
        \<a href="\#" class="btn btn-primary"\>Start your free trial\</a\>  
        \<a href="\#" class="btn btn-outline"\>Book a walkthrough\</a\>  
    \</div\>  
\</section\>

\<section class="section container" id="features"\>  
    \<div style="text-align: center; margin-bottom: 64px;"\>  
        \<h2 style="font-family: var(--font-display); font-size: 42px;"\>Everything connected.\</h2\>  
        \<p style="color: var(--text-muted);"\>Consolidate your stack. Save $400+/month on fragmented tools.\</p\>  
    \</div\>

    \<div class="compare-grid"\>  
        \<div class="card"\>  
            \<h3 style="margin-bottom: 16px;"\>Fragmented Stack\</h3\>  
            \<ul style="list-style: none; color: var(--text-muted); font-size: 14px;"\>  
                \<li style="padding: 12px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between;"\>\<span\>Salesforce CRM\</span\> \<span\>$75\</span\>\</li\>  
                \<li style="padding: 12px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between;"\>\<span\>Intercom Chat\</span\> \<span\>$49\</span\>\</li\>  
                \<li style="padding: 12px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between;"\>\<span\>Calendly Pro\</span\> \<span\>$15\</span\>\</li\>  
                \<li style="padding: 12px 0; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between;"\>\<span\>Otter.ai\</span\> \<span\>$20\</span\>\</li\>  
            \</ul\>  
            \<div style="margin-top: 24px; font-weight: 700; font-size: 20px;"\>Total: $159/mo\</div\>  
        \</div\>

        \<div class="card card-pro"\>  
            \<h3 style="margin-bottom: 16px; color: var(--brand-blue);"\>wrrk.ai OS\</h3\>  
            \<p style="margin-bottom: 24px; font-size: 15px;"\>One login. One source of truth. One flat fee.\</p\>  
            \<ul style="list-style: none; font-size: 14px;"\>  
                \<li style="margin-bottom: 12px;"\>✓ Unified Omni-channel Inbox\</li\>  
                \<li style="margin-bottom: 12px;"\>✓ Autonomous AI Meeting Pilot\</li\>  
                \<li style="margin-bottom: 12px;"\>✓ End-to-end Revenue Pipeline\</li\>  
                \<li style="margin-bottom: 12px;"\>✓ 24/7 Customer AI Agents\</li\>  
            \</ul\>  
            \<div style="margin-top: 24px; font-weight: 700; font-size: 24px; color: var(--brand-blue);"\>$9.99\<span style="font-size: 14px; font-weight: 400; color: var(--text-muted);"\>/user\</span\>\</div\>  
        \</div\>  
    \</div\>

    \<div class="mockup"\>  
        \<div class="mockup-side"\>  
            \<div style="height: 12px; width: 80%; background: var(--border-subtle); border-radius: 4px; margin-bottom: 20px;"\>\</div\>  
            \<div style="height: 12px; width: 60%; background: var(--border-subtle); border-radius: 4px; margin-bottom: 12px;"\>\</div\>  
            \<div style="height: 12px; width: 70%; background: var(--border-subtle); border-radius: 4px; margin-bottom: 12px;"\>\</div\>  
            \<div style="height: 12px; width: 50%; background: var(--border-subtle); border-radius: 4px; margin-bottom: 12px;"\>\</div\>  
        \</div\>  
        \<div class="mockup-content"\>  
            \<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;"\>  
                \<h4 style="font-family: var(--font-display); font-size: 24px;"\>Active Intelligence\</h4\>  
                \<span class="badge" style="background: \#E6F4EA; color: \#137333;"\>Live\</span\>  
            \</div\>  
            \<div style="background: var(--bg-surface); padding: 24px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 13px;"\>  
                \<p style="color: var(--brand-blue); margin-bottom: 8px;"\>\> System: Lead "Sarah Kim" engaged via WhatsApp\</p\>  
                \<p style="margin-bottom: 8px;"\>\> AI Agent: Analyzing intent... (Demo Request)\</p\>  
                \<p style="margin-bottom: 8px;"\>\> Action: Calendar slot offered for Tuesday 10:00 AM\</p\>  
                \<p style="color: \#137333;"\>\> Status: Meeting confirmed. CRM Updated.\</p\>  
            \</div\>  
        \</div\>  
    \</div\>  
\</section\>

\<footer class="container" style="padding: 64px 0; border-top: 1px solid var(--border-subtle); margin-top: 80px;"\>  
    \<div style="display: flex; justify-content: space-between; align-items: center;"\>  
        \<div class="brand" style="font-size: 20px;"\>wrrk.ai\</div\>  
        \<div style="font-size: 13px; color: var(--text-muted);"\>©️ 2026 wrrk.ai Operating System. Built on archzOS.\</div\>  
    \</div\>  
\</footer\>

\</body\>  
\</html\>  
