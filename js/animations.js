// Animation utilities and controllers

class AnimationController {
    constructor() {
        this.activeAnimations = new Map();
    }

    // Queue animations for smoother performance
    queueAnimation(element, animationName, duration = 500) {
        const key = element.id || Math.random().toString(36);
        
        if (this.activeAnimations.has(key)) {
            clearTimeout(this.activeAnimations.get(key));
        }
        
        element.classList.add(`animate-${animationName}`);
        
        const timeout = setTimeout(() => {
            element.classList.remove(`animate-${animationName}`);
            this.activeAnimations.delete(key);
        }, duration);
        
        this.activeAnimations.set(key, timeout);
    }

    // Batch animate multiple elements
    batchAnimate(elements, animationName, duration = 500, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                this.queueAnimation(element, animationName, duration);
            }, index * delay);
        });
    }

    // Stagger animations
    staggerAnimate(container, animationName, duration = 500) {
        const children = container.querySelectorAll('[class*="pinned"]');
        this.batchAnimate(Array.from(children), animationName, duration);
    }

    // Chain animations
    chainAnimate(element, animations, delay = 300) {
        let currentIndex = 0;
        
        const playNext = () => {
            if (currentIndex < animations.length) {
                this.queueAnimation(element, animations[currentIndex], delay);
                currentIndex++;
                setTimeout(playNext, delay);
            }
        };
        
        playNext();
    }

    // Bounce animation
    bounce(element) {
        this.queueAnimation(element, 'bounce', 600);
    }

    // Shake animation
    shake(element) {
        this.queueAnimation(element, 'shake', 500);
    }

    // Pulse animation
    pulse(element, times = 1) {
        for (let i = 0; i < times; i++) {
            setTimeout(() => {
                this.queueAnimation(element, 'pulse', 1000);
            }, i * 1100);
        }
    }

    // Glow effect
    glow(element, duration = 1500) {
        this.queueAnimation(element, 'glow', duration);
    }

    // Float animation
    float(element) {
        element.classList.add('animate-float');
    }

    stopFloat(element) {
        element.classList.remove('animate-float');
    }
}

// Initialize global animation controller
const animationController = new AnimationController();

// Typewriter effect for text
class TypewriterEffect {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    start() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }

    stop() {
        this.element.textContent = this.text;
    }
}

// Smooth scroll animation
function smoothScroll(targetPosition, duration = 1000) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let start = null;

    window.requestAnimationFrame(function animation(currentTime) {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollBy(0, distance * progress - (window.scrollY - startPosition));

        if (progress < 1) {
            window.requestAnimationFrame(animation);
        }
    });
}

// Parallax effect
class ParallaxEffect {
    constructor(element, speed = 0.5) {
        this.element = element;
        this.speed = speed;
        this.offsetY = 0;
        
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        this.offsetY = window.scrollY * this.speed;
        this.element.style.transform = `translateY(${this.offsetY}px)`;
    }
}

// Fade in elements on scroll
class FadeInOnScroll {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
    }

    observe(elements) {
        if (Array.isArray(elements)) {
            elements.forEach(el => this.observer.observe(el));
        } else {
            this.observer.observe(elements);
        }
    }

    disconnect() {
        this.observer.disconnect();
    }
}

// Ripple effect for buttons
class RippleEffect {
    static create(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
}

// Add ripple effect to all buttons
document.addEventListener('click', (e) => {
    if (e.target.closest('button')) {
        RippleEffect.create(e);
    }
});

// Confetti animation for success moments
class ConfettiAnimation {
    static create(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.position = 'fixed';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            const angle = (Math.PI * 2 * i) / count;
            const velocity = 3 + Math.random() * 4;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let currentX = x;
            let currentY = y;
            let currentVx = vx;
            let currentVy = vy;
            const gravity = 0.1;

            document.body.appendChild(confetti);

            const animate = () => {
                currentX += currentVx;
                currentY += currentVy;
                currentVy += gravity;

                confetti.style.left = currentX + 'px';
                confetti.style.top = currentY + 'px';
                confetti.style.opacity = 1 - (currentY - y) / 300;

                if (currentY < y + 300) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };

            animate();
        }
    }

    static burst(x, y) {
        this.create(x, y, 50);
    }
}

// Loading animation
class LoadingSpinner {
    static create() {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div style="border: 4px solid rgba(220, 38, 38, 0.2); 
                        border-top: 4px solid #dc2626; 
                        border-radius: 50%; 
                        width: 40px; 
                        height: 40px; 
                        animation: spin 1s linear infinite;"></div>
        `;
        return spinner;
    }

    static show(container) {
        container.appendChild(this.create());
    }

    static hide(container) {
        const spinner = container.querySelector('.loading-spinner');
        if (spinner) {
            spinner.remove();
        }
    }
}

// Add spin animation if not in animations.css
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes ripple {
        0% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
        }
        100% {
            box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(220, 38, 38, 0.5);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    .confetti {
        position: fixed !important;
    }
    
    @keyframes investigateFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
    }
    
    .timeline {
        position: relative;
        padding: 20px 0;
    }
    
    .timeline-event {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        padding-left: 40px;
        position: relative;
    }
    
    .timeline-event::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 12px;
        height: 12px;
        background: #dc2626;
        border-radius: 50%;
        border: 3px solid #1f2937;
    }
    
    .timeline-event::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 12px;
        width: 2px;
        height: 30px;
        background: rgba(220, 38, 38, 0.3);
    }
    
    .timeline-event:last-child::after {
        display: none;
    }
    
    .timeline-time {
        font-weight: bold;
        color: #dc2626;
        min-width: 150px;
    }
    
    .timeline-desc {
        flex: 1;
        color: #e5e7eb;
    }
    
    .timeline-evidence {
        font-size: 12px;
        color: #9ca3af;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// Entrance animations for modals
function animateModalContent() {
    const modalBody = document.querySelector('.modal-body');
    if (!modalBody) return;

    const children = modalBody.querySelectorAll('h2, h3, p, li');
    animationController.batchAnimate(Array.from(children), 'fade-in-up', 300, 100);
}

// Listen for modal opening
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active') && 
            mutation.target.id === 'content-modal') {
            animateModalContent();
        }
    });
});

// Only observe if modals exist
const modal = document.getElementById('content-modal');
if (modal) {
    observer.observe(modal, { attributes: true });
}

// Scroll reveal animations on the board
document.addEventListener('DOMContentLoaded', () => {
    const fadeInOnScroll = new FadeInOnScroll();
    const elements = document.querySelectorAll('.pinned-element');
    fadeInOnScroll.observe(Array.from(elements));
});

// Connection line animation
function animateConnectionLine(fromElement, toElement) {
    const svg = document.getElementById('string-connections');
    const lines = svg.querySelectorAll('.connection-line');
    
    lines.forEach(line => {
        animationController.queueAnimation(line, 'glow', 1000);
    });
}

// Success animation when solving parts of the case
function celebrateSuccess(element) {
    animationController.queueAnimation(element, 'bounce', 600);
    const rect = element.getBoundingClientRect();
    ConfettiAnimation.create(rect.left + rect.width / 2, rect.top, 20);
}

// Notification system with animations
class Notification {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#dc2626' : '#3b82f6'};
            color: white;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideInLeft 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    static success(message) {
        this.show(message, 'success');
    }

    static error(message) {
        this.show(message, 'error');
    }

    static info(message) {
        this.show(message, 'info');
    }
}

// Export animation utilities globally
window.animationController = animationController;
window.ConfettiAnimation = ConfettiAnimation;
window.LoadingSpinner = LoadingSpinner;
window.Notification = Notification;
window.TypewriterEffect = TypewriterEffect;
