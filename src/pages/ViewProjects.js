const ViewProjects = () => {
  return (
    <div>
      <div class="navbar">
        <a href="/TeacherDash.js">Home</a>
        <a href="#requests">Requests</a>
        <a href="/ViewProjects.js">My Projects</a>
      </div>
      <h1>View Projects</h1>
      <div class="container">
        <div class="form">
          <h2>Add New Project</h2>
          <form id="projectForm">
            <label for="description">Description</label>
            <input type="text" id="description" name="description" required />
            <label for="category">Category</label>
            <select id="category" name="category" required>
              <option value="">Select a category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">Design</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="ML">Machine Learning</option>
              <option value="DL">Deep Learning</option>
            </select>
            <label for="availability">Availability</label>
            <select id="availability" name="availability" required>
              <option value="">Select availability</option>
              <option value="1">one</option>
              <option value="2">two</option>
              <option value="3">three</option>
              <option value="4">four</option>
              <option value="5">five</option>
            </select>
            <button type="submit">Add Project</button>
          </form>
        </div>
        <div class="list">
          <h2>Project List</h2>
          <ul id="projectList"></ul>
        </div>
      </div>
      {/* <script>
    // keep track of projects in an array
    const projects = [];
    
    const form = document.querySelector('form');
    const descriptionInput = document.getElementById('description');
    const categoryInput = document.getElementById('category');
    const availabilityInput = document.getElementById('availability');
    const projectList = document.getElementById('projectList');

    // add event listener to form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent default form submission behavior

      // get form data
      const description = descriptionInput.value;
      const category = categoryInput.value;
      const availability = availabilityInput.value;

      // add project to array
      const project = { description, category, availability };
      projects.push(project);

      form.reset();
      // update project list
      updateProjectList();
    });

    // function to update project list
    function updateProjectList() {
      // clear current list items
      projectList.innerHTML = '';

      // loop through projects array and create list items
      projects.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>Description:</span> ${project.description}<br>
          <span>Category:</span> ${project.category}<br>
          <span>Availability:</span> ${project.availability}
        `;
        projectList.appendChild(listItem);
      });
    }
    updateProjectList();
    
  </script> */}
    </div>
  );
};

export default ViewProjects;
