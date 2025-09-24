// Enhanced animations.js - Advanced animations and dark mode functionality
// Breathe Better Website - Air Quality Awareness Platform

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 Breathe Better - Initializing advanced animations...');
    
    // Initialize all animation systems
    initializeDarkMode();
    initializeAdvancedAnimations();
    initializeScrollAnimations();
    initializeNavigationEffects();
    initializeParticleInteractions();
    initializePerformanceOptimizations();
    initializeAccessibilityFeatures();
    
    console.log('✅ All animations initialized successfully!');
});

// Dark Mode Functionality
function initializeDarkMode() {
    console.log('🌙 Initializing dark mode...');
    
    // Create dark mode toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌓';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.setAttribute('title', 'Switch between light and dark mode');
    document.body.appendChild(themeToggle);
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('breathe-better-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeToggleIcon(initialTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('breathe-better-theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeToggleIcon(newTheme);
        }
    });
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth theme switching
        document.body.classList.add('theme-transitioning');
        
        // Animate theme toggle button
        themeToggle.style.transform = 'translateY(-50%) scale(1.3) rotate(180deg)';
        themeToggle.style.background = newTheme === 'dark' ? 'linear-gradient(45deg, #1e3c72, #2a5298)' : 'var(--gradient-air)';
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('breathe-better-theme', newTheme);
            updateThemeToggleIcon(newTheme);
            
            themeToggle.style.transform = 'translateY(-50%) scale(1) rotate(0deg)';
            document.body.classList.remove('theme-transitioning');
            
            // Trigger particles color update
            updateParticleColors(newTheme);
            
        }, 300);
        
        // Show theme change notification
        showThemeChangeNotification(newTheme);
    });
    
    // Keyboard accessibility
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            themeToggle.click();
        }
    });
}

function updateThemeToggleIcon(theme) {
    const toggle = document.querySelector('.theme-toggle');
    const icons = {
        light: '🌙',
        dark: '☀️'
    };
    toggle.innerHTML = icons[theme];
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

function showThemeChangeNotification(theme) {
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
        <div class="theme-notification-content">
            ${theme === 'dark' ? '🌙' : '☀️'}
            <span>Switched to ${theme} mode</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
        color: ${theme === 'dark' ? '#F1F5F9' : '#2F4F4F'};
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border: 1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Advanced Animations
function initializeAdvancedAnimations() {
    console.log('✨ Initializing advanced animations...');
    
    // Magnetic effect for interactive elements
    initializeMagneticEffect();
    
    // Text typing animation for hero
    initializeTypewriterEffect();
    
    // Floating elements animation
    createAdvancedFloatingElements();
    
    // Card tilt effect
    initializeCardTiltEffect();
    
    // Button ripple effects
    initializeRippleEffects();
    
    // Loading animations
    initializeLoadingAnimations();
}

function initializeMagneticEffect() {
    const interactiveElements = document.querySelectorAll('.cta-button, .card, .theme-toggle');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return; // Disable on mobile
            
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            element.style.transform = element.style.transform.replace(/translate\([^)]*\)/g, '');
        });
    });
}

function initializeTypewriterEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    const cursor = '<span class="cursor">|</span>';
    
    heroTitle.innerHTML = cursor;
    
    // Add cursor styles
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .cursor {
            animation: blink 1s infinite;
            color: rgba(255, 255, 255, 0.8);
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(cursorStyle);
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML = text.substring(0, i + 1) + cursor;
            i++;
            setTimeout(typeWriter, 100 + Math.random() * 100); // Variable speed
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                heroTitle.innerHTML = text;
            }, 2000);
        }
    }
    
    // Start typing after hero animation
    setTimeout(typeWriter, 2000);
}

function createAdvancedFloatingElements() {
    const particleContainer = document.querySelector('.particles-bg');
    if (!particleContainer) return;
    
    // Add air quality themed particles
    const airQualityParticles = [
        { emoji: '🌿', size: 20, speed: 15 },
        { emoji: '💨', size: 25, speed: 12 },
        { emoji: '🍃', size: 18, speed: 18 },
        { emoji: '💧', size: 15, speed: 20 },
        { emoji: '🌱', size: 22, speed: 14 }
    ];
    
    airQualityParticles.forEach((particle, index) => {
        const element = document.createElement('div');
        element.className = 'floating-emoji';
        element.textContent = particle.emoji;
        element.style.cssText = `
            position: absolute;
            font-size: ${particle.size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: emoji-float ${particle.speed}s ease-in-out infinite ${Math.random() * 5}s;
            opacity: 0.6;
            z-index: -1;
        `;
        particleContainer.appendChild(element);
    });
    
    // Add emoji float animation
    const emojiStyle = document.createElement('style');
    emojiStyle.textContent = `
        @keyframes emoji-float {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
                opacity: 0.6; 
            }
            25% { 
                transform: translateY(-30px) rotate(90deg); 
                opacity: 0.8; 
            }
            50% { 
                transform: translateY(-60px) rotate(180deg); 
                opacity: 1; 
            }
            75% { 
                transform: translateY(-30px) rotate(270deg); 
                opacity: 0.8; 
            }
        }
    `;
    document.head.appendChild(emojiStyle);
}

function initializeCardTiltEffect() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

function initializeRippleEffects() {
    const buttons = document.querySelectorAll('.cta-button, .video-control-btn, .theme-toggle');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

function initializeLoadingAnimations() {
    // Page load animation
    window.addEventListener('load', function() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-icon">🌱</div>
                <div class="loader-text">Breathing life into data...</div>
                <div class="loader-bar">
                    <div class="loader-progress"></div>
                </div>
            </div>
        `;
        
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            color: white;
            font-family: 'Inter', sans-serif;
        `;
        
        document.body.appendChild(loader);
        
        // Animate loader
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transform = 'scale(1.1)';
            setTimeout(() => loader.remove(), 500);
        }, 1500);
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    console.log('📜 Initializing scroll animations...');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Stagger animation for cards
                if (entry.target.classList.contains('cards-grid')) {
                    const cards = entry.target.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                            card.style.animation = `card-float-in 0.8s ease-out ${index * 0.1}s both`;
                        }, index * 100);
                    });
                }
                
                // Special animation for section titles
                if (entry.target.classList.contains('section-title')) {
                    entry.target.style.animation = 'title-emergence 1.2s ease-out both';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.animate-on-scroll, .card, .section-title, .cards-grid').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Parallax scrolling effect
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .particles-bg');
        
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('hero') ? 0.5 : 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Scroll progress indicator
    createScrollProgressIndicator();
}

function createScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-air);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Navigation Effects
function initializeNavigationEffects() {
    console.log('🧭 Initializing navigation effects...');
    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Scroll effect for navigation
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show nav on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id], .hero');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id') || 'home';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href.includes(current) || (current === 'home' && href.includes('index.html'))) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu functionality
    createAdvancedMobileMenu();
}

function createAdvancedMobileMenu() {
    const nav = document.querySelector('nav .container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<span></span><span></span><span></span>';
    mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
    
    nav.appendChild(mobileToggle);
    
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
        
        // Animate individual nav items
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach((item, index) => {
            if (navLinks.classList.contains('active')) {
                setTimeout(() => {
                    item.style.animation = `slideInRight 0.3s ease-out forwards`;
                    item.style.opacity = '1';
                }, index * 100);
            } else {
                item.style.animation = 'none';
                item.style.opacity = '0';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        }
    });
}

// Particle Interactions
function initializeParticleInteractions() {
    console.log('✨ Initializing particle interactions...');
    
    const particles = document.querySelectorAll('.particle, .floating-emoji');
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Mouse interaction with particles
    function animateParticles() {
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 150) {
                const moveX = (mouseX - particleX) * 0.05;
                const moveY = (mouseY - particleY) * 0.05;
                
                particle.style.transform += ` translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    if (window.innerWidth > 768) {
        animateParticles();
    }
}

function updateParticleColors(theme) {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        if (theme === 'dark') {
            particle.style.background = particle.style.background.replace(/rgba\(([^)]+)\)/g, 
                (match, rgba) => {
                    const values = rgba.split(',');
                    return `rgba(${values[0]}, ${values[1]}, ${values[2]}, 0.6)`;
                }
            );
        } else {
            particle.style.background = particle.style.background.replace(/rgba\(([^)]+)\)/g, 
                (match, rgba) => {
                    const values = rgba.split(',');
                    return `rgba(${values[0]}, ${values[1]}, ${values[2]}, 0.3)`;
                }
            );
        }
    });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    console.log('⚡ Initializing performance optimizations...');
    
    // Disable heavy animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
        
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationDuration = '12s';
        });
        
        // Reduce particle count
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 3) particle.remove();
        });
    }
    
    // Intersection Observer for expensive animations
    const expensiveAnimations = document.querySelectorAll('.card-icon');
    const expensiveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'icon-orbit 4s ease-in-out infinite';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, { rootMargin: '50px' });
    
    expensiveAnimations.forEach(element => expensiveObserver.observe(element));
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        const particles = document.querySelectorAll('.particle, .floating-emoji');
        
        if (document.hidden) {
            particles.forEach(particle => {
                particle.style.animationPlayState = 'paused';
            });
        } else {
            particles.forEach(particle => {
                particle.style.animationPlayState = 'running';
            });
        }
    });
}

// Accessibility Features
function initializeAccessibilityFeatures() {
    console.log('♿ Initializing accessibility features...');
    
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleMotionPreference(mediaQuery) {
        if (mediaQuery.matches) {
            document.documentElement.style.setProperty('--transition', 'none');
            document.querySelectorAll('.particle, .floating-emoji').forEach(element => {
                element.style.animation = 'none';
            });
        }
    }
    
    handleMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleMotionPreference);
    
    // Focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.warn('Animation error caught:', e.error);
});

// Resize handler
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalculate animations on resize
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
        });
    }, 250);
});

// Export functions for external use
window.BreatheBetterAnimations = {
    updateTheme: updateThemeToggleIcon,
    updateParticles: updateParticleColors,
    showNotification: showThemeChangeNotification
};

console.log('🌱 Breathe Better animations fully loaded!');
