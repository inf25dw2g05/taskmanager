import { useEffect, useState } from "react";
import { getProjects } from "../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong> - {project.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;