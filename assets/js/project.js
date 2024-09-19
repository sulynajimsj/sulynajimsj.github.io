const projects = [
  {
    title: "Odin - AI Reverse Video Search",
    image: "/assets/img/odinlogo.jpeg",
    description: "A reverse video search engine that uses AI to find source videos in real-time.",
    tools: "Python, OpenCV, Web Scraping",
    accomplishments: [
      "Developing an AI search tool allowing users to seamlessly find the source of short form clips on social media.",
      "Applying a new untapped technological concept called Reverse Video Search to make Odin a reality.",
      "Developed the main prototype using SerpApi, Flask, and Firebase which we tested with 40-50 students."
    ],
    date: "2023-06-01"
  },
  {
    title: "Apparelo",
    image: "/assets/img/apparellogo.jpg",
    description: "An AI-powered apparel recognizer that uses a custom model to classify brand & clothes from images.",
    tools: "PyTorch, Numpy, Res50, AlexNet, BeautifulSoup",
    accomplishments: [
      "Developed an open-source ML apparel recognizer with 97% accuracy using AlexNet for a University project.",
      "Trained the model using CNNs, AlexNets, and Res50 implementations and compared the accuracy of each model.",
      "Scraped thousands of training data from various eCommerce stores like Amazon and Myers using Beautiful Soup."
    ],
    github: "https://github.com/danialkhan02/MLApparelPredictor",
    date: "2023-05-15"
  },
  {
    title: "GIS Mapper",
    image: "/assets/img/gislogo.jpg",
    description: "A GIS Mapper like Google Maps for our University project.",
    tools: "C++, Glade",
    accomplishments: [
      "Implemented a GIS Mapper like Google Maps and Ways for our University project.",
      "Used algorithms like Greedy Search and Dijkstra we were able to evaluate the shortest path between 2 set locations.",
      "Utilized Multi-threading to ensure our performance was not significantly affected when loading large maps like Tokyo."
    ],
    presentation: "https://docs.google.com/presentation/d/1nDinJHHWgYojelXLkastNywIIFfyP0mq74pkXsUd-MY/edit",
    date: "2023-03-20"
  }
];

let loadedProjects = 1;

function createProjectCard(project) {
  const date = new Date(project.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <div class="col s12 m4 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            <li><b>Tools:</b> ${project.tools}</li>
            ${project.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
          </ul>
          ${project.github ? `
          <div class="card-action">
            <a aria-label="Visit the GitHub repo for project" href="${project.github}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
          </div>
          ` : ''}
          ${project.presentation ? `
          <div class="card-action">
            <a aria-label="Project Presentation" href="${project.presentation}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function loadProjects() {
  const container = document.getElementById('projects-row');
  
  // Sort projects by date in descending order
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Clear existing projects
  container.innerHTML = '';
  
  // Load all projects
  projects.forEach((project, index) => {
    if (index < loadedProjects) {
      const projectHTML = createProjectCard(project);
      container.insertAdjacentHTML('beforeend', projectHTML);
    }
  });
  
  // Hide the "Load More Projects" button if all projects are loaded
  if (loadedProjects >= projects.length) {
    document.getElementById('load-more-projects').style.display = 'none';
  }
}

function loadMoreProjects() {
  loadedProjects += 2;
  loadProjects();
}

document.addEventListener('DOMContentLoaded', function() {
  loadProjects();
  document.getElementById('load-more-projects').addEventListener('click', loadMoreProjects);
});