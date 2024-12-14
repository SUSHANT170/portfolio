import React from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';

const codingPlatforms = [
  {
    name: "LeetCode",
    description: "Strengthened my basic coding skills and practiced questions to retain concepts and improve coding proficiency.",
    link: "https://leetcode.com/u/sushantujjawal/", // Replace with your LeetCode profile
    icon: <SiLeetcode className="text-6xl text-[#FFA116]" />,
  },
  {
    name: "GeeksforGeeks",
    description: "Practiced top coding questions and enhanced my knowledge of computer science fundamentals.",
    link: "https://www.geeksforgeeks.org/user/sushant2may/", // Replace with your GFG profile
    icon: <SiGeeksforgeeks className="text-6xl text-[#2F8D46]" />,
  },
  {
    name: "Codeforces",
    description: "Participated in contests to improve problem-solving skills through challenging competitive programming problems.",
    link: "https://codeforces.com/profile/sushantkumar1", // Replace with your Codeforces profile
    icon: <SiCodeforces className="text-6xl text-[#1F8ACB]" />,
  },
];

const CodingPlatforms = () => {
  return (
    <section className="py-20 bg-gray-50" id="coding-platforms">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
          Coding Platforms 👨‍💻
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {codingPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-6">{platform.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {platform.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {platform.description}
              </p>
              <span className="text-secondary font-medium group-hover:underline">
                View Profile &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
