document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#5e72e4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#5e72e4",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Animate server light
    const serverLight = document.getElementById('server-light');
    setTimeout(() => {
        serverLight.style.opacity = '1';
    }, 1000);

    // Simulate stats loading
    simulateStats();
    
    // Set server URL
    document.getElementById('server-url').textContent = window.location.host;
});

function simulateStats() {
    let cpu = 0;
    let memory = 0;
    let disk = 0;
    
    const cpuInterval = setInterval(() => {
        cpu += Math.random() * 5;
        if (cpu > 100) cpu = 100;
        document.getElementById('cpu-load').textContent = Math.round(cpu) + '%';
        if (cpu >= 100) clearInterval(cpuInterval);
    }, 100);
    
    const memoryInterval = setInterval(() => {
        memory += Math.random() * 200;
        if (memory > 4096) memory = 4096;
        document.getElementById('memory-usage').textContent = Math.round(memory) + 'MB';
        if (memory >= 4096) clearInterval(memoryInterval);
    }, 100);
    
    const diskInterval = setInterval(() => {
        disk += Math.random() * 5;
        if (disk > 100) disk = 100;
        document.getElementById('disk-space').textContent = Math.round(disk) + 'GB';
        if (disk >= 100) clearInterval(diskInterval);
    }, 100);
}
