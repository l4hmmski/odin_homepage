function createPreview(type) {
  const preview =
    document.createElement("div");

  preview.classList.add(
    "project-preview",
    `preview-${type}`
  );

  if (type === "quote") {
    preview.innerHTML = `
      <div class="mock-window">
        <div class="mock-sidebar">
          <strong>QuoteHQ</strong>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="mock-content">
          <strong>New Quote</strong>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  }

  if (type === "battleship") {
    const board =
      document.createElement("div");

    board.classList.add("mini-board");

    for (
      let index = 0;
      index < 36;
      index += 1
    ) {
      const cell =
        document.createElement("span");

      if (
        index === 8 ||
        index === 15 ||
        index === 27
      ) {
        cell.textContent = "×";
        cell.classList.add("mini-hit");
      }

      board.appendChild(cell);
    }

    preview.appendChild(board);
  }

  if (type === "weather") {
    preview.innerHTML = `
      <div class="weather-search">
        Search for a city...
      </div>

      <div class="weather-main">
        <span class="weather-icon">●</span>

        <div>
          <strong>18°C</strong>
          <small>Partly cloudy</small>
        </div>
      </div>

      <div class="forecast-row">
        <span>MON<br>16°</span>
        <span>TUE<br>18°</span>
        <span>WED<br>17°</span>
        <span>THU<br>19°</span>
      </div>
    `;
  }

  if (type === "todo") {
    preview.innerHTML = `
      <div class="todo-input">
        <span>Add a new task...</span>
        <strong>Add</strong>
      </div>

      <ul class="todo-preview-list">
        <li>✓ Design homepage</li>
        <li>□ Build project section</li>
        <li>□ Write about page</li>
        <li>□ Deploy project</li>
      </ul>
    `;
  }

  return preview;
}

function createProjectLink(
  text,
  url,
  className
) {
  const link =
    document.createElement("a");

  link.classList.add(className);
  link.href = url;
  link.textContent = text;

  if (url !== "#") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}

export function createProjectCard(project) {
  const card =
    document.createElement("article");

  card.classList.add("project-card");

  const preview =
    createPreview(project.previewType);

  const information =
    document.createElement("div");

  information.classList.add(
    "project-information"
  );

  const heading =
    document.createElement("h3");

  heading.textContent = project.title;

  const description =
    document.createElement("p");

  description.textContent =
    project.description;

  const technologyList =
    document.createElement("ul");

  technologyList.classList.add(
    "technology-list"
  );

  project.technologies.forEach(
    function (technology) {
      const item =
        document.createElement("li");

      item.textContent = technology;

      technologyList.appendChild(item);
    }
  );

  const links =
    document.createElement("div");

  links.classList.add("project-links");

  links.appendChild(
    createProjectLink(
      "View project ↗",
      project.liveUrl,
      "project-link"
    )
  );

  links.appendChild(
    createProjectLink(
      "GitHub ↗",
      project.githubUrl,
      "github-link"
    )
  );

  information.appendChild(heading);
  information.appendChild(description);
  information.appendChild(
    technologyList
  );
  information.appendChild(links);

  card.appendChild(preview);
  card.appendChild(information);

  return card;
}