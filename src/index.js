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

function displayProjects() {
  projectsGrid.textContent = "";

  projects.forEach(function (project) {
    const projectCard =
      createProjectCard(project);

    projectsGrid.appendChild(
      projectCard
    );
  });
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
        isOpen
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

displayProjects();
setCurrentYear();
setUpMobileNavigation();