document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".section, .projects-list article"
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document.querySelectorAll(".project-more").forEach((button) => {
    button.addEventListener("click", () => {
      const projectContent = button.closest("article")?.querySelector(".project-details");

      if (!projectContent) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      button.textContent = isExpanded ? "More" : "Show Less";
      projectContent.hidden = isExpanded;
    });
  });
});
