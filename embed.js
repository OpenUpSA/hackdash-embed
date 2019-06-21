const fetchProjectList = () => {
  fetch('https://hackdash.org/api/v2/vulekamali/projects')
    .then(response => response.json())
    .then(projects => {
      const element = document.querySelector('#hackdash-embed');
      const filteredProjects = projects.filter(({ tags }) => !!tags.find(
        region => region.toLowerCase() === element.dataset.tag.toLowerCase()
      ))
      element.innerHTML = `
      <div class="hackdash-all-projects-wrapper">
        ${filteredProjects.map(({ contributors,
          title,
          description,
          _id: id,
          cover,
        }) => (`
        <div class="hackdash-project-wrapper">
          <div class="hackdash-project-plate">
            <div
              style="background-image:url(${cover})"
              class="hackdash-project-image"></div>
            <div class="hackdash-contributors">
              <div class="hackdash-contributor-icon"></div>
              <h6 class="hackdash-contributor-value">${contributors.length} Contributor</h6>
            </div>
            <div class="hackdash-line-divider"></div>
            <h3 class="hackdash-project-title">${title}</h3>
            <p class="hackdash-project-description">${description.length > 70 ? `${description.substring(0, 70)}...` : description}</p>
            <div class="hackdash-button-wrapper"><a href="https://hackdash.org/projects/${id}" class="hackdash-button">VIEW&nbsp;THIS&nbsp;PROJECT</a>
            </div>
          </div>
        </div>`
        )).join('')}
      </div>`
      return element.innerHTML;
    });
};

fetchProjectList();
