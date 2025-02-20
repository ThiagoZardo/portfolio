import { FC } from "react";

const ProjectCard: FC<{ title: string; description: string; link: string; image: string }> = ({ title, description, link, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} target="_blank" className="text-blue-500 hover:text-blue-400">
          View Project
        </a>
      </div>
    </div>
  );
};

const ProjectsPage: FC = () => {
  return (
    <div id="projects" className="bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Project One"
            description="This is a brief description of the project, explaining the core functionality and purpose."
            link="https://github.com/yourusername/project-one"
            image="/path-to-your-image.jpg"
          />
          <ProjectCard
            title="Project Two"
            description="This is a brief description of the project, explaining the core functionality and purpose."
            link="https://github.com/yourusername/project-two"
            image="/path-to-your-image.jpg"
          />
          {/* Adicione mais ProjectCard conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
