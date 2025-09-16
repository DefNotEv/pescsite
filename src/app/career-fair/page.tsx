'use client';

import Image from "next/image";

export default function CareerFairPage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <Image
          src="/career-fair-hero.jpg"
          alt="Career Fair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ zIndex: -10 }}
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: -5 }} aria-hidden />
        <div className="relative z-10 w-full pt-44">
          <div className="w-full px-6">
            <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Industrial Roundtable Card */}
              <button 
                onClick={() => scrollToSection('industrial-roundtable')}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80"></div>
                <div className="relative h-full flex items-center justify-center p-6 text-center">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">Industrial Roundtable</h2>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Expo Card */}
              <button 
                onClick={() => scrollToSection('expo')}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-purple-800/80"></div>
                <div className="relative h-full flex items-center justify-center p-6 text-center">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">Expo</h2>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Roundtable Section */}
      <section id="industrial-roundtable" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industrial Roundtable
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Connecting top engineering talent with leading industry professionals
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              The Purdue Engineering Student Council's Industrial Roundtable is the largest student-run career fair in the nation, 
              bringing together hundreds of companies and thousands of engineering students for networking and recruitment opportunities.
            </p>
            <p className="mt-4">
              Held annually in the fall, this premier event provides a platform for students to explore career opportunities, 
              connect with potential employers, and learn about the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Expo Section */}
      <section id="expo" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Engineering Expo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Showcasing student innovation and research to industry leaders
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              The Engineering Expo is a biannual event that highlights the innovative projects and research 
              conducted by Purdue engineering students. It serves as a bridge between academia and industry, 
              allowing students to present their work to potential employers and industry professionals.
            </p>
            <p className="mt-4">
              This event provides a unique opportunity for companies to discover emerging talent and for students 
              to gain valuable feedback on their projects while networking with industry representatives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
