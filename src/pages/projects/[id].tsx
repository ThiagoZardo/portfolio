import { useRouter } from "next/router";
import React from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  details: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "solarview-business",
    name: "SolarView Business",
    description: "A solar energy management app.",
    details: "SolarView Business helps users monitor and optimize solar energy usage...",
    link: "https://play.google.com/store/apps/details?id=com.solarviewbusinessapp",
  },
  {
    id: "disque-idoso-165",
    name: "Disque Idoso 165",
    description: "An app for elderly assistance services.",
    details: "Disque Idoso 165 provides quick access to emergency services and assistance for elderly people...",
    link: "https://play.google.com/store/apps/details?id=br.com.control361.disqueidoso165",
  },
];

const ProjectDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center text-white mt-10">Project not found.</p>;
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <p className="mt-4">{project.details}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block bg-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-700"
        >
          View on Play Store
        </a>
      </div>
    </main>
  );
};

export default ProjectDetail;
