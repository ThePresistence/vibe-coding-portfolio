// Project Data
const projectsData = [
    {
        id: 1,
        title: "LLM Inference Engine",
        tags: ["llm", "inference", "optimization"],
        image: "<i class='fas fa-brain'></i>",
        description: "Built a high-performance inference engine that reduces latency by 40% using dynamic batching and quantization techniques.",
        fullDescription: `<p>This project focused on optimizing large language model inference for production environments. Key achievements:</p>
        <ul>
            <li>Implemented 4-bit weight quantization with minimal accuracy loss</li>
            <li>Designed dynamic batching system that increased throughput by 3x</li>
            <li>Integrated with Kubernetes for auto-scaling</li>
            <li>Reduced inference latency from 500ms to 300ms for 7B parameter models</li>
        </ul>
        <p>Technologies: PyTorch, ONNX Runtime, Triton Inference Server, Kubernetes</p>`,
        links: [
            { text: "View Case Study", url: "#" },
            { text: "GitHub", url: "#" }
        ]
    },
    {
        id: 2,
        title: "RAG System for Enterprise",
        tags: ["llm", "rag", "vector-db"],
        image: "<i class='fas fa-database'></i>",
        description: "Developed a Retrieval-Augmented Generation system for enterprise knowledge bases with 95% accuracy on factual questions.",
        fullDescription: `<p>Built a production-grade RAG system for enterprise knowledge management:</p>
        <ul>
            <li>Created custom chunking algorithms for optimal retrieval</li>
            <li>Implemented hybrid search combining sparse and dense embeddings</li>
            <li>Designed evaluation framework to measure factual accuracy</li>
            <li>Integrated with existing knowledge management systems</li>
        </ul>
        <p>Technologies: LangChain, Pinecone, HuggingFace Transformers, FastAPI</p>`,
        links: [
            { text: "View Demo", url: "#" },
            { text: "Technical Blog", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Multimodal AI Agent",
        tags: ["agents", "multimodal", "llm"],
        image: "<i class='fas fa-robot'></i>",
        description: "Created an autonomous agent system capable of reasoning across text, images, and structured data sources.",
        fullDescription: `<p>Developed an advanced agentic system with multimodal capabilities:</p>
        <ul>
            <li>Implemented tool-using agents with planning capabilities</li>
            <li>Integrated vision-language models for image understanding</li>
            <li>Built memory systems for long-term context retention</li>
            <li>Created feedback mechanisms for self-improvement</li>
        </ul>
        <p>Technologies: LangChain, CLIP, Stable Diffusion, ReAct framework</p>`,
        links: [
            { text: "Research Paper", url: "#" },
            { text: "Demo Video", url: "#" }
        ]
    },
    {
        id: 4,
        title: "LLM Fine-tuning Pipeline",
        tags: ["training", "llm", "optimization"],
        image: "<i class='fas fa-cogs'></i>",
        description: "Built an end-to-end pipeline for fine-tuning large language models with RLHF and domain adaptation techniques.",
        fullDescription: `<p>Developed a scalable fine-tuning system for customizing foundation models:</p>
        <ul>
            <li>Implemented LoRA and QLoRA for parameter-efficient fine-tuning</li>
            <li>Built data preprocessing pipeline with quality filtering</li>
            <li>Created RLHF workflow with human feedback integration</li>
            <li>Optimized training for multi-GPU and distributed setups</li>
        </ul>
        <p>Technologies: PyTorch, Hugging Face Transformers, DeepSpeed, PEFT</p>`,
        links: [
            { text: "Technical Documentation", url: "#" },
            { text: "GitHub", url: "#" }
        ]
    }
];

// Blog Data
const blogsData = [
    {
        id: 1,
        title: "Optimizing Transformer Inference: A Practical Guide",
        date: "April 2, 2025",
        tags: ["llm", "inference", "optimization"],
        excerpt: "Learn how to optimize transformer models for production with techniques like quantization, KV caching, and dynamic batching.",
        image: "blog1.jpg" // Placeholder
    },
    {
        id: 2,
        title: "Building Robust RAG Systems Beyond Basic Implementations",
        date: "March 15, 2025",
        tags: ["rag", "llm", "vector-db"],
        excerpt: "Advanced techniques for retrieval-augmented generation systems that go beyond simple vector similarity.",
        image: "blog2.jpg" // Placeholder
    },
    {
        id: 3,
        title: "Agentic AI: Frameworks for Autonomous Systems",
        date: "February 28, 2025",
        tags: ["agents", "llm", "reasoning"],
        excerpt: "Exploring frameworks for building autonomous AI agents with planning, reasoning and self-improvement capabilities.",
        image: "blog3.jpg" // Placeholder
    },
    {
        id: 4,
        title: "Parameter-Efficient Fine-Tuning for LLMs",
        date: "February 10, 2025",
        tags: ["training", "llm", "fine-tuning"],
        excerpt: "A deep dive into LoRA, QLoRA, and other techniques for efficient adaptation of large language models.",
        image: "blog4.jpg" // Placeholder
    },
    {
        id: 5,
        title: "Evaluating LLM Performance: Beyond Accuracy Metrics",
        date: "January 20, 2025",
        tags: ["evaluation", "llm", "metrics"],
        excerpt: "How to build comprehensive evaluation frameworks for large language models that capture more than just accuracy.",
        image: "blog5.jpg" // Placeholder
    },
    {
        id: 6,
        title: "Multimodal AI: Bridging Text, Vision, and Audio",
        date: "January 5, 2025",
        tags: ["multimodal", "llm", "vision"],
        excerpt: "Techniques for combining different modalities in AI systems to enable richer understanding and generation.",
        image: "blog6.jpg" // Placeholder
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const blogsGrid = document.querySelector('.blogs-grid');
const searchInput = document.getElementById('blog-search-input');
const tagFilters = document.querySelectorAll('.tag');
const loadMoreBtn = document.getElementById('load-more-blogs');
const projectModal = document.getElementById('project-modal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');
const navLinks = document.querySelectorAll('.nav-links a');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// Typing effect variables
const dynamicText = document.querySelector('.dynamic-text');
const typeOptions = ['LLM Inference Optimization', 'Agentic AI Development', 'Generative AI Systems', 'Model Fine-tuning'];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 100;

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Initialize the portfolio
function initPortfolio() {
    // Render initial projects
    renderProjects('all');

    // Render initial blogs
    renderBlogs(blogsData.slice(0, 3));

    // Start typing effect
    startTypingEffect();
    
    // Initialize interactive shapes
    initInteractiveShapes();

    // Add event listeners
    setupEventListeners();
}

// Initialize interactive shapes
function initInteractiveShapes() {
    const shapes = document.querySelectorAll('.shape');
    const heroImgContainer = document.querySelector('.hero-img-container');
    
    if (heroImgContainer && shapes.length > 0) {
        // Add mouse move interaction
        heroImgContainer.addEventListener('mousemove', (e) => {
            const rect = heroImgContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate position relative to the center of the container
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX; // -1 to 1
            const deltaY = (y - centerY) / centerY; // -1 to 1
            
            // Move each shape in response to cursor position
            shapes.forEach((shape, index) => {
                const intensity = 15 + (index * 5); // Different intensity for each shape
                const speedFactor = 0.5 + (index * 0.2);
                
                // Apply transform with transition for smoother movement
                shape.style.transform = `translate(${deltaX * intensity}px, ${deltaY * intensity}px) scale(${1 + Math.abs(deltaX + deltaY) * 0.1})`;
                shape.style.transition = `transform ${speedFactor}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
            });
        });
        
        // Reset shapes when mouse leaves
        heroImgContainer.addEventListener('mouseleave', () => {
            shapes.forEach(shape => {
                shape.style.transform = '';
            });
        });
    }
}

// Render projects based on filter
function renderProjects(filter) {
    let filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.tags.includes(filter));

    projectsGrid.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.id = project.id;

        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <p class="project-desc">${project.description}</p>
                <div class="project-links">
                    ${project.links.map(link => `<a href="${link.url}" class="project-link">${link.text} <i class="fas fa-arrow-right"></i></a>`).join('')}
                </div>
            </div>
        `;

        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Render blogs
function renderBlogs(blogs) {
    blogsGrid.innerHTML = '';

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="fas fa-newspaper" style="color: white; font-size: 3rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></i>
            </div>
            <div class="blog-content">
                <p class="blog-date">${blog.date}</p>
                <h3 class="blog-title">${blog.title}</h3>
                <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="#" class="project-link">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

        blogsGrid.appendChild(blogCard);
    });
}

// Filter blogs based on search and tags
function filterBlogs() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeTag = document.querySelector('.tag.active').dataset.tag;

    let filteredBlogs = blogsData;

    // Filter by tag
    if (activeTag !== 'all') {
        filteredBlogs = filteredBlogs.filter(blog => blog.tags.includes(activeTag));
    }

    // Filter by search term
    if (searchTerm) {
        filteredBlogs = filteredBlogs.filter(blog => 
            blog.title.toLowerCase().includes(searchTerm) ||
            blog.tags.some(tag => tag.includes(searchTerm)) ||
            blog.excerpt.toLowerCase().includes(searchTerm)
        );
    }

    renderBlogs(filteredBlogs.slice(0, 3));
    
    // Hide load more button if all blogs are shown
    if (filteredBlogs.length <= 3) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Open project modal
function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="modal-description">
            ${project.fullDescription}
        </div>
        <div class="modal-footer">
            ${project.links.map(link => `<a href="${link.url}" class="btn primary-btn">${link.text}</a>`).join('')}
        </div>
    `;

    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Typing effect
function startTypingEffect() {
    const currentText = typeOptions[typeIndex];
    const currentChar = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
    
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(startTypingEffect, typeDelay);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(startTypingEffect, typeDelay / 2);
    } else {
        isDeleting = !isDeleting;
        
        if (!isDeleting) {
            typeIndex = (typeIndex + 1) % typeOptions.length;
        }

        setTimeout(startTypingEffect, isDeleting ? 1000 : 200);
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Initialize running dog
    initRunningDog();
    
    // Mobile menu toggle for Tailwind navbar
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Project filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // Blog search
    searchInput.addEventListener('input', filterBlogs);

    // Blog tag filters
    tagFilters.forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelector('.tag.active').classList.remove('active');
            tag.classList.add('active');
            filterBlogs();
        });
    });

    // Load more blogs
    loadMoreBtn.addEventListener('click', () => {
        const currentBlogCount = document.querySelectorAll('.blog-card').length;
        const searchTerm = searchInput.value.toLowerCase();
        const activeTag = document.querySelector('.tag.active').dataset.tag;

        let filteredBlogs = blogsData;

        if (activeTag !== 'all') {
            filteredBlogs = filteredBlogs.filter(blog => blog.tags.includes(activeTag));
        }

        if (searchTerm) {
            filteredBlogs = filteredBlogs.filter(blog => 
                blog.title.toLowerCase().includes(searchTerm) ||
                blog.tags.some(tag => tag.includes(searchTerm)) ||
                blog.excerpt.toLowerCase().includes(searchTerm)
            );
        }

        const nextBlogs = filteredBlogs.slice(currentBlogCount, currentBlogCount + 3);
        if (nextBlogs.length > 0) {
            renderBlogs([...document.querySelectorAll('.blog-card'), ...nextBlogs]);
        }

        if (currentBlogCount + 3 >= filteredBlogs.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for ALL links with # including nav and hero buttons
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Fix for contact link - ensure it goes to contact section
            let targetSection;
            if (targetId === '#contact') {
                targetSection = document.getElementById('contact');
                console.log('Contact section targeted:', targetSection);
            } else {
                targetSection = document.querySelector(targetId);
            }
            
            if (targetSection) {
                const offset = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile navigation if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });

    // Mobile navigation toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            // Would normally send this data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add some delay to the follower
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Hover effects for custom cursor
    const hoverElements = document.querySelectorAll('a, button, .project-card, .blog-card, .tag, .filter-btn');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Initialize the running dog animation
function initRunningDog() {
    const dog = document.querySelector('.running-dog');
    const dogContainer = document.querySelector('.dog');
    let lastScrollTop = 0;
    let dogPosition = 0;
    const screenWidth = window.innerWidth;
    const dogWidth = 80; // Width of the dog in pixels
    
    // Initial dog state
    dogContainer.classList.add('dog-running-forward');
    
    // Handle window resize
    window.addEventListener('resize', () => {
        screenWidth = window.innerWidth;
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        // Get current scroll position
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine scroll direction
        const scrollingDown = st > lastScrollTop;
        
        // Calculate scroll percentage (0-1)
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = st / scrollHeight;
        
        // Calculate new dog position based on scroll percentage
        // We want to map 0-1 to 0-screenWidth
        dogPosition = (scrollPercentage * (screenWidth - dogWidth));
        
        // Update dog direction based on scroll direction
        if (scrollingDown) {
            dogContainer.classList.remove('dog-running-backward');
            dogContainer.classList.add('dog-running-forward');
        } else {
            dogContainer.classList.remove('dog-running-forward');
            dogContainer.classList.add('dog-running-backward');
        }
        
        // Update dog position on screen
        dog.style.transform = `translateX(${dogPosition}px)`;
        
        // Save last scroll position
        lastScrollTop = st <= 0 ? 0 : st;
    });
    
    // Show dog when scrolling starts
    window.addEventListener('scroll', function showDog() {
        if (window.scrollY > 50) {
            dog.style.opacity = '1';
            window.removeEventListener('scroll', showDog);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolio);
