// ===== DATA OBJECT =====
const portfolioData = {
    skills: [
        { name: "HTML5", icon: "code" },
        { name: "CSS / Tailwind", icon: "palette" },
        { name: "JavaScript (ES6)", icon: "zap" },
    ],
    projects: [
        {
            title: "Radar System",
            description: "Arduino-based radar visualization using Processing."
        },
        {
            title: "Remix Portfolio",
            description: "Modern, responsive portfolio with dynamic routing."
        },
        {
            title: "Java Swing Library",
            description: "Desktop library management system in Java."
        }
    ],
    location: "Janakpur, Nepal"
};

// ===== SKILLS RENDER =====
const skillsGrid = document.getElementById("skills-grid");

portfolioData.skills.forEach(skill => {
    skillsGrid.innerHTML += `
    <div class="glass p-6 rounded-xl text-center">
      <i data-lucide="${skill.icon}" class="mx-auto mb-4"></i>
      <h3 class="font-semibold">${skill.name}</h3>
    </div>
  `;
});

// ===== PROJECTS RENDER =====
const projectsGrid = document.getElementById("projects-grid");

portfolioData.projects.forEach(project => {
    projectsGrid.innerHTML += `
    <div class="glass p-6 rounded-xl">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-slate-300">${project.description}</p>
    </div>
  `;
});

// ===== GOOGLE MAP =====
const encodedLocation = encodeURIComponent(portfolioData.location);
document.getElementById("map").innerHTML = `
  <iframe
    class="w-full h-64 border-0"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=${encodedLocation}&output=embed">
  </iframe>
`;

// ===== INTERSECTION OBSERVER =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-section").forEach(section => {
    observer.observe(section);
});

// ===== INIT ICONS =====
lucide.createIcons();
