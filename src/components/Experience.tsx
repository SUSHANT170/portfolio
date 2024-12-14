import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Misemind Technologies",
      position: "Full Stack Developer",
      location: "New Delhi, India",
      periodStart: new Date(2023, 0, 9),
      projects: [
        {
          name: "API Management | MERN+AWS",
          duration: "Jan 2023–Present",
          responsibilities: [
            "Worked on various APIs of marketplace, ATS, tokenization, and created a form by extracting schema from Swagger and converting it to RJSF acceptable format, supporting nested levels.",
            "Added security by implementing AWS Cognito for user authentication and authorization.",
            "Enhanced user experience by decreasing API latency using AWS OpenSearch and customizing Lambda and DynamoDB indexing accordingly.",
            "Implemented WebSocket for real-time workflow status updates.",
          ],
        },
        {
          name: "RFQ | MERN+AWS",
          duration: "Sep 2023–Jan 2024",
          responsibilities: [
            "Implemented a quote expiration mechanism using REDIS TTL in AWS, periodically invoking Lambda.",
            "Enhanced user experience by implementing new UI based on Figma designs.",
          ],
        },
        {
          name: "Marketplace | MERN+AWS",
          duration: "Sep 2023–Jan 2024",
          responsibilities: [
            "Worked on adding new APIs with logic building.",
            "Integrated the RFQ platform into Marketplace.",
            "Centralized and cleaned up configuration settings.",
          ],
        },
        {
          name: "DNI | NESTJS+ANGULAR",
          duration: "Jan 2024–Present",
          responsibilities: [
            "Developed and maintained an insurance application using NestJS, Angular, PostgreSQL, and Redis.",
            "Implemented file upload with OCR for automatic KYC document extraction.",
            "Designed concurrency control for editing quotes to ensure data integrity.",
            "Contributed to tariff and premium calculation logic for core application functionality.",
          ],
        },
      ],
    },
  ];

  // Calculate total experience
  const calculateExperience = (startDate) => {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;

    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    return (
      <>
        <span className="font-bold">{years}</span> year
        {years !== 1 ? 's' : ''} {' '}
        <span className="font-bold">{months}</span> month
        {months !== 1 ? 's' : ''} and{' '}
        <span className="font-bold">{days}</span> day
        {days !== 1 ? 's' : ''}
      </>
    );
  };

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
          Work Experience 💼
        </h2>

        <p className="text-center text-lg font-medium text-secondary mb-16">
          Total Experience: {calculateExperience(experiences[0].periodStart)}
        </p>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {exp.company}
              </h3>
              <h4 className="text-lg font-semibold text-secondary mb-1">
                {exp.position} - {exp.location}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {exp.periodStart.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                – Present
              </p>

              {exp.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-6 mb-8 shadow hover:shadow-md transition-shadow"
                >
                  <h5 className="text-xl font-semibold text-primary mb-2">
                    {project.name}
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.duration}
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                    {project.responsibilities.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
