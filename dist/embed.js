const fetchProjectList = () => {
  fetch('https://hackdash.org/api/v2/vulekamali/projects')
    .then(response => response.json())
    .then(projects => projects.filter(({ tags }) => !!tags.find(
      region => region.toLowerCase() === document.querySelector('#hackdash-embed').dataset.hashtag
    )).map(({ contributors,
      title,
      description,
      cover,
      _id: id
    }) => (
      
    )));
};

fetchProjectList();

// const filterProjects = (fetchProjectList()) => {
//   const projects = fetchProjectList;
//   console.log(111, projects);
// };

// filterProjects(fetchProjectList);

// document.querySelector('.contributor').innerHTML = `Hello ${bob}`;