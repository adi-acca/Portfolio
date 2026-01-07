gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const tl = gsap.timeline();

window.addEventListener("load", () => {
    gsap.to("#loading", {
        duration: 0.8,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
            document.getElementById("loading").style.display = "none";
            initIntroAnimations();
        }
    });
});

function initIntroAnimations() {
    gsap.set([".top-tags", ".main-title", ".desc", ".live-line", ".buttons", ".site-link"], {
        opacity: 0,
        y: 50
    });
    
    gsap.set(".right", {
        opacity: 0,
        y: 50
    });
    
    gsap.set(".stats", {
        opacity: 0,
        y: 30
    });

    gsap.set(".orbit", { 
        scale: 0, 
        rotation: 0 
    });
    
    gsap.set(".floating-icon", { 
        scale: 0 
    });
    
    gsap.set(".core", { 
        scale: 0 
    });

    const mainTL = gsap.timeline();

    mainTL
        .to(".top-tags", { duration: 0.8, opacity: 1, y: 0, ease: "back.out(1.7)" })
        .to(".main-title", { duration: 1, opacity: 1, y: 0, ease: "power3.out" }, "-=0.5")
        .to(".desc", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.3")
        .to(".live-line", { duration: 0.6, opacity: 1, y: 0, ease: "power2.out" }, "-=0.2")
        .to(".buttons", { duration: 0.8, opacity: 1, y: 0, ease: "back.out(1.7)" }, "-=0.1")
        .to(".site-link", { duration: 0.6, opacity: 1, y: 0, ease: "power2.out" }, "-=0.3")
        .to(".right", { duration: 1, opacity: 1, y: 0, ease: "power3.out" }, "-=1")
        .to(".orbit", { duration: 1, scale: 1, ease: "elastic.out(1, 0.5)" }, "-=0.5")
        .to(".floating-icon", { 
            duration: 0.6, 
            scale: 1, 
            ease: "back.out(1.7)",
            stagger: 0.1 
        }, "-=0.3")
        .to(".core", { duration: 0.8, scale: 1, ease: "elastic.out(1, 0.3)" }, "-=0.2")
        .to(".stats", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.1");

    setTimeout(() => {
        typewriterEffect();
    }, 2000);

    setTimeout(() => {
        animateCounters();
    }, 2500);

    setTimeout(() => {
        hideIntroShowSite();
    }, 4500);
}

function typewriterEffect() {
    const text = "www.aditya.com";
    const element = document.querySelector(".typewriter-text");
    
    gsap.to(element, {
        duration: 2,
        text: text,
        ease: "none"
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target');
        const isMs = target.includes('ms');
        const numTarget = parseInt(target);
        
        gsap.to(counter, {
            duration: 2,
            innerHTML: isMs ? numTarget + "ms" : (numTarget < 10 ? "0" + numTarget : numTarget),
            snap: { innerHTML: 1 },
            ease: "power2.out"
        });
    });
}

function hideIntroShowSite() {
    const intro = document.getElementById("intro");
    const site = document.getElementById("real-site");

    gsap.to(intro, {
        duration: 1.2,
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        ease: "power2.inOut",
        onComplete: () => {
            intro.style.display = "none";
            site.style.display = "block";
            
            initVideoBackground();
            
            initMainSiteAnimations();
        }
    });
}

function initVideoBackground() {
    const video = document.querySelector('.page-video-bg');
    
    if (video) {
        video.addEventListener('loadeddata', () => {
            setTimeout(() => {
                gsap.to(video, {
                    duration: 3,
                    opacity: 0.7,
                    ease: "power2.inOut"
                });
            }, 500);
        });
        
        video.addEventListener('error', (e) => {
            console.warn("Video failed to load:", e);
        });
        
        video.play().catch(e => {
            console.warn("Video autoplay failed:", e);
        });
    }
}

function initMainSiteAnimations() {
    gsap.fromTo(".ul-list", 
        { y: -100, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, ease: "bounce.out" }
    );

    initScrollAnimations();
    
    initInteractiveElements();
}

function initScrollAnimations() {
    gsap.fromTo(".home-p", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: ".home",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".info-home h1", 
        { opacity: 0, x: -50 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".home",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".info-home h3", 
        { opacity: 0, x: -30 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".home",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".info-p", 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            delay: 0.4,
            scrollTrigger: {
                trigger: ".home",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".btnn", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".home",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".home img", 
        { opacity: 0, x: 50, scale: 0.8 },
        { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".home",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".about-info", 
        { opacity: 0, x: -50 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".about h3", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: ".about",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".about-text", 
        { opacity: 0, x: -30 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".about-info2",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".photo-container", 
        { opacity: 0, x: 50, rotationY: 15 },
        { 
            opacity: 1, 
            x: 0, 
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".about-info2",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".project p:first-child", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: ".project",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".project h1", 
        { opacity: 0, scale: 0.8 },
        { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".project",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".project-card", 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".projects-container",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".services p:first-child", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: ".services",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".services h1", 
        { opacity: 0, scale: 0.8 },
        { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".services",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".service-card", 
        { opacity: 0, y: 50, rotationX: 15 },
        { 
            opacity: 1, 
            y: 0, 
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".section-title", 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".contact-info", 
        { opacity: 0, x: -50 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".contact-form", 
        { opacity: 0, x: 50 },
        { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

function initInteractiveElements() {
    document.querySelectorAll('.interactive-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1.05,
                ease: "back.out(1.7)"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1,
                ease: "back.out(1.7)"
            });
        });
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                y: -10,
                scale: 1.02,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1.2,
                rotation: 360,
                ease: "back.out(1.7)"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "back.out(1.7)"
            });
        });
    });
}

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".ul-list li");
const floatingProfile = document.getElementById("floatingProfile");

if (floatingProfile) {
    floatingProfile.addEventListener("click", () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: aboutSection.offsetTop - 120,
                    autoKill: false
                },
                ease: "power2.inOut"
            });
        }
    });
}

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.scrollY;

    if (scrollY > 200) {
        floatingProfile.classList.add("show");
    } else {
        floatingProfile.classList.remove("show");
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");

        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            const headerHeight = 120;
            const targetPosition = target.offsetTop - headerHeight;
            
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: targetPosition,
                    autoKill: false
                },
                ease: "power2.inOut"
            });
            
            document.querySelectorAll(".ul-list li").forEach(item => {
                item.classList.remove("active");
            });
            
            const clickedNavItem = anchor.closest("li");
            if (clickedNavItem) {
                clickedNavItem.classList.add("active");
            }
        }
    });
});

gsap.to("body", {
    backgroundPosition: "50% 100px",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.appendChild(cursor);

    gsap.to(cursor, {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => cursor.remove()
    });
});

function createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(particle);
        
        gsap.to(particle, {
            duration: Math.random() * 10 + 5,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
            ease: "none",
            repeat: -1,
            yoyo: true
        });
    }
}

setTimeout(() => {
    createParticles();
}, 5000);

let ticking = false;

function updateScrollAnimations() {
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
    window.addEventListener("load", () => {
  gsap.fromTo(".page-video-bg",
    { opacity: 0 },
    { opacity: 1, duration: 2, ease: "power3.out" }
  );

  gsap.to("#loading", {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      document.getElementById("loading").style.display = "none";
    }
  });
});

});