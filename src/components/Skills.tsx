import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaAngular, FaProjectDiagram 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCplusplus, SiGit, SiGithub, SiPostgresql, 
  SiAmazonaws, SiRabbitmq, SiApachekafka, SiNestjs, SiRedis, 
  SiTypescript, SiExpress, SiMongodb, SiMysql 
} from 'react-icons/si';

import { Skill } from '../types';

const Skills = () => {
  const topSkills: Skill[] = [
    { id: 1, name: 'React', icon: <FaReact />, link: 'https://reactjs.org/docs/getting-started.html' },
    { id: 2, name: 'Angular', icon: <FaAngular />, link: 'https://angular.io/docs' },
    { id: 3, name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/en/docs/' },
    { id: 4, name: 'NestJS', icon: <SiNestjs className="text-[#E0234E] text-5xl" />, link: 'https://docs.nestjs.com/' },
    { id: 5, name: 'AWS', icon: <SiAmazonaws className="text-[#FF9900] text-5xl" />, link: 'https://aws.amazon.com/documentation/' },
    { id: 6, name: 'RabbitMQ', icon: <SiRabbitmq className="text-[#FF6600] text-5xl" />, link: 'https://www.rabbitmq.com/documentation.html' },
    { id: 7, name: 'Apache Kafka', icon: <SiApachekafka className="text-[#231F20] text-5xl" />, link: 'https://kafka.apache.org/documentation/' },
    { id: 8, name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] text-5xl" />, link: 'https://www.postgresql.org/docs/' },
    { id: 9, name: 'DynamoDB', icon: <SiAmazonaws className="text-[#405D9C] text-5xl" />, link: 'https://docs.aws.amazon.com/dynamodb/' },
    { id: 10, name: 'Microservices', icon: <FaProjectDiagram className="text-[#4B5563] text-5xl" />, link: 'https://microservices.io/' },
  ];

  const otherSkills: Skill[] = [
    { id: 11, name: 'HTML', icon: <FaHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { id: 12, name: 'CSS', icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { id: 13, name: 'JavaScript', icon: <FaJs />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { id: 14, name: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/docs/' },
    { id: 15, name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/en/starter/installing.html' },
    { id: 16, name: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/docs/' },
    { id: 17, name: 'Java', icon: <FaJava />, link: 'https://docs.oracle.com/javase/tutorial/' },
    { id: 18, name: 'C++', icon: <SiCplusplus />, link: 'https://cplusplus.com/doc/tutorial/' },
    { id: 19, name: 'SQL', icon: <SiMysql />, link: 'https://dev.mysql.com/doc/' },
    { id: 20, name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/docs' },
    { id: 21, name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/doc' },
    { id: 22, name: 'GitHub', icon: <SiGithub />, link: 'https://docs.github.com/en' },
    { id: 23, name: 'Redis', icon: <SiRedis className="text-[#DC382D] text-5xl" />, link: 'https://redis.io/docs/' },
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        
        {/* Top Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            My Top Skills 🚀
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Core technologies I excel at
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {topSkills.map((skill) => (
            <a 
              key={skill.id}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-1"
            >
              <span className="text-5xl text-gray-800">{skill.icon}</span>
              <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
            </a>
          ))}
        </div>

        {/* Other Skills Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            My Other Skills 💻
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Additional tools and technologies I work with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {otherSkills.map((skill) => (
            <a 
              key={skill.id}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-1"
            >
              <span className="text-5xl text-gray-800">{skill.icon}</span>
              <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
