
function initHeader() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const header = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const handleScroll = () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    };
    window.addEventListener('scroll', handleScroll);
}

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) otherItem.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        }
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-heading, .product-card, .industry-card, .service-item').forEach(el => {
    observer.observe(el);
});

        // Smooth scroll to FAQ section
        const faqBadge = document.querySelector('.faq-badge');
        if (faqBadge) {
            faqBadge.addEventListener('click', () => {
                document.querySelector('.faq-section').scrollIntoView({ behavior: 'smooth' });
            });
        }

// Stats Counter Animation Logic
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000; // Animation duration in ms
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentCount = Math.floor(progress * target);
                
                counter.innerText = currentCount + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            requestAnimationFrame(update);
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting) && !animated) {
            startCounting();
            animated = true;
        }
    }, { threshold: 0.1 });

    statsObserver.observe(statsSection);
}
        
// 
const slider = document.getElementById("slider");
if (slider) {
    window.sliderScrollLeft = function() {
        slider.scrollBy({ left: -300, behavior: "smooth" });
    }
    window.sliderScrollRight = function() {
        slider.scrollBy({ left: 300, behavior: "smooth" });
    }
}


    // Testimonials Data
        const testimonials = [
            {
                quote: "The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
                name: "Brooklyn Simmons",
                title: "Homeowner",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=42&h=42&fit=crop"
            },
            {
                quote: "Outstanding service and exceptional quality. Their team went above and beyond to ensure our project was completed perfectly. Highly satisfied with the results!",
                name: "Sarah Anderson",
                title: "Factory Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=42&h=42&fit=crop"
            },
            {
                quote: "Best investment we made for our operations. The efficiency improvements have been remarkable. Definitely recommend to anyone in the industry!",
                name: "Michael Johnson",
                title: "Quality Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=42&h=42&fit=crop"
            }
        ];
 
        let currentIndex = 0;
 
        function updateTestimonial() {
            const testimonial = testimonials[currentIndex];
            const quoteEl = document.querySelector('.client-content p.quote');
            const nameEl = document.querySelector('.user h4');
            const titleEl = document.querySelector('.user span');
            const imgEl = document.querySelector('.user img');

            if (quoteEl) quoteEl.textContent = `"${testimonial.quote}"`;
            if (nameEl) nameEl.textContent = testimonial.name;
            if (titleEl) titleEl.textContent = testimonial.title;
            if (imgEl) imgEl.src = testimonial.image;
        }
 
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                updateTestimonial();
            });
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                updateTestimonial();
            });
            updateTestimonial();
        }
 
        // Logo hover effects
        document.querySelectorAll('.logo').forEach(logo => {
            const span = logo.querySelector('span');
            if (span) {
                logo.addEventListener('click', function() {
                    console.log('Logo clicked: ' + span.textContent);
                });
            }
        });


        document.addEventListener('DOMContentLoaded', initHeader);

        //<!-- why-us -->

        document.querySelectorAll('.learn-more-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Learn More - Additional information would load here');
            });
        });
 
    
        document.querySelectorAll('.certificate-item').forEach((item) => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(8px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
 
        const ratingBox = document.querySelector('.rating-box');
        if (ratingBox) {
            ratingBox.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 10px 30px rgba(17, 110, 74, 0.15)';
            });
            
            ratingBox.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        }


      
        const processSteps = document.querySelectorAll('.process-step');

 
        
       
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
 
       
        processSteps.forEach((step, index) => {
            step.style.opacity = '0';
            step.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
        });