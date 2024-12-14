import React from 'react';

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-primary text-white relative"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl -bottom-20 -right-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6">
          Hi, I'm Sushant Kumar 👋
          <span className="block mt-4 text-secondary">Software Engineer</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
          Building impactful solutions, diving into new technologies and always learning new things.
        </p>

        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToBottom}
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-lg transition-colors"
            style={{
              backgroundColor: '#F3F4F6',
              color: '#374151',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #D1D5DB',
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = '';
              target.style.color = '';
              target.className =
                'bg-secondary text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = '#F3F4F6';
              target.style.color = '#374151';
              target.className = 'px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
          >
            Let's Connect 🚀
          </button>

          <a
            href="mailto:sushant2may@gmail.com"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-lg transition-colors"
            style={{
              backgroundColor: '#F3F4F6',
              color: '#374151',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #D1D5DB',
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = '';
              target.style.color = '';
              target.className =
                'bg-secondary text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = '#F3F4F6';
              target.style.color = '#374151';
              target.className = 'px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
          >
            Mail Me 📧
          </a>

          <a
            href="resume.pdf"
            download="Sushant_Kumar_Resume.pdf"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-lg transition-colors"
            style={{
              backgroundColor: '#F3F4F6',
              color: '#374151',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #D1D5DB',
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = '';
              target.style.color = '';
              target.className =
                'bg-secondary text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = '#F3F4F6';
              target.style.color = '#374151';
              target.className = 'px-6 py-3 rounded-lg font-bold text-lg transition-colors';
            }}
          >
            Download Resume 📄
          </a>
        </div>

        {/* Substack Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://substack.com/@sushantkumar2?utm_source=user-menu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-bold text-lg text-white transition-colors w-full sm:w-auto max-w-xs"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: 'none',
            }}
            onMouseOver={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#45A049';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLAnchorElement).style.backgroundColor = '#4CAF50';
            }}
          >
            Read My Blogs on Substack 📝
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;
