import { FC } from "react";

const SkillCard: FC<{ name: string; icon: string; description: string }> = ({ name, icon, description }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg">
      <img src={icon} alt={name} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SkillsPage: FC = () => {
  return (
    <div id="skills" className="bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillCard
            name="React Native"
            icon="/react-native-logo.svg"
            description="I use React Native to build cross-platform mobile apps for iOS and Android."
          />
          <SkillCard name="Node.js" icon="/nodejs-logo.svg" description="Backend development using Node.js, Express, and other frameworks." />
          <SkillCard name="Docker" icon="/docker-logo.svg" description="Containerization and orchestration with Docker." />
          {/* Adicione mais SkillCard conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
