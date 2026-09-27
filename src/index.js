import "./styles.css";

import { projects } from "./data/projects.js";
import { createProjectCard } from "./components/project-card.js";

const projectsGrid =
  document.querySelector(
    "#projects-grid"
  );

const menuButton =
  document.querySelector(
    "#menu-button"
  );

const navigation =
  document.querySelector(
    "#navigation"
  );

const currentYear =
  document.querySelector(
    "#current-year"
  );

function displaySelectedProjects() {
  projectsGrid.textContent = "";

  const selectedProjects =
    projects.filter(function (project) {
      return project.featured;
    });

  selectedProjects.forEach(
    function (project) {
      const projectCard =
        createProjectCard(project);

      projectsGrid.appendChild(
        projectCard
      );
    }
  );
}

function setCurrentYear() {
  currentYear.textContent =
    new Date().getFullYear();
}

function setUpMobileNavigation() {
  menuButton.addEventListener(
    "click",
    function () {
      const isOpen =
        navigation.classList.toggle(
          "open"
        );

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.textContent =
        isOpen ? "×" : "☰";
    }
  );

  navigation.addEventListener(
    "click",
    function (event) {
      if (
        event.target.matches("a")
      ) {
        navigation.classList.remove(
          "open"
        );

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.textContent = "☰";
      }
    }
  );
}

displaySelectedProjects();
setCurrentYear();
setUpMobileNavigation();