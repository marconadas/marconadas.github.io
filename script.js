// Partículas Interativas em background usando Particles.js
document.addEventListener("DOMContentLoaded", function () {

    // Configuração do Particles (BAPE Vibe - Earth tones/fireflies)
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 900
                    }
                },
                "color": {
                    "value": ["#5C6D45", "#F2A900", "#3D4D32"] // Camo greens and yellow
                },
                "shape": {
                    "type": ["circle", "triangle"],
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                },
                "size": {
                    "value": 4,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3D4D32", // Dark green lines
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 1.5, // Slightly faster like embers
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble" // Bubble effect instead of grab
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "size": 6,
                        "duration": 2,
                        "opacity": 1
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Scroll Observer para animar surgimento de seções e barras de progresso
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animações acionadas dentro da secção revelada (Barras de skill BAPE)
                const skillBars = entry.target.querySelectorAll('.fill-animation');
                skillBars.forEach(bar => {
                    // Adiciona a visibilidade com um pequeno stagger
                    setTimeout(() => {
                        bar.classList.add('visible');
                    }, bar.className.includes('delay-100') ? 100 : bar.className.includes('delay-200') ? 200 : 0);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas as classes fade-up
    document.querySelectorAll('.fade-up').forEach((el) => {
        observer.observe(el);
    });

    // Hover effect for main text
    const camoText = document.querySelector('.border-text-camo');
    if (camoText) {
        camoText.addEventListener('mouseenter', () => {
            camoText.classList.remove('border-text-camo');
            camoText.classList.add('border-text-solid');
        });
        camoText.addEventListener('mouseleave', () => {
            camoText.classList.remove('border-text-solid');
            camoText.classList.add('border-text-camo');
        });
    }
});
