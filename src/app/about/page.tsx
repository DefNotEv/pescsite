'use client';

import { useState } from 'react';
import Image from "next/image";
import CommitteeModal from "@/components/CommitteeModal";
import MemberCard from "@/components/MemberCard";
import { members } from "@/data/members";
import { getImagePath } from "@/utils/images";
import { Analytics } from "@vercel/analytics/next"

const COMMITTEES = [
  {
    name: "Industrial Roundtable",
    description: "Organizes the largest student-run career fair in the nation, connecting students with top engineering companies.",
    email: "ir@purdue.edu",
    image: getImagePath("/com.jpg")
  },
  {
    name: "Expo",
    description: "Showcases student projects and research to industry professionals and the Purdue community.",
    email: "expo@purdue.edu",
    image: getImagePath("/hero.jpg")
  },
  {
    name: "Campus Relations",
    description: "Fosters relationships between PESC and other student organizations across campus.",
    email: "campusrel@purdue.edu",
    image: getImagePath("/howtojoin.jpg")
  },
  {
    name: "Engineering Outreach",
    description: "Engages with the local community to promote engineering education and opportunities.",
    email: "outreach@purdue.edu",
    image: getImagePath("/com.jpg")
  },
  {
    name: "Wellbeing",
    description: "Promotes mental and physical health initiatives for engineering students.",
    email: "wellbeing@purdue.edu",
    image: getImagePath("/hero.jpg")
  },
  {
    name: "Communications",
    description: "Manages PESC's digital presence and internal communications.",
    email: "comms@purdue.edu",
    image: getImagePath("/howtojoin.jpg")
  },
  {
    name: "Internal Development",
    description: "Focuses on professional development and team building within PESC.",
    email: "internal@purdue.edu",
    image: getImagePath("/com.jpg")
  },
  {
    name: "Purdue in Indianapolis",
    description: "Coordinates initiatives and opportunities for engineering students at the Indianapolis campus.",
    email: "indy@purdue.edu",
    image: getImagePath("/hero.jpg")
  },
  {
    name: "Alumni Relations",
    description: "Maintains connections with PESC alumni and organizes networking events.",
    email: "alumni@purdue.edu",
    image: getImagePath("/howtojoin.jpg")
  }
];

export default function AboutPage() {
  const [selectedCommittee, setSelectedCommittee] = useState<typeof COMMITTEES[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (committee: typeof COMMITTEES[0]) => {
    setSelectedCommittee(committee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="font-sans">
      <CommitteeModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        committee={selectedCommittee} 
      />
      {/* Hero (image) */}
      <section className="relative min-h-screen">
        <Image
          src={getImagePath("/abouthero.jpg")}
          alt="About PESC hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_-20%]"
          style={{ zIndex: -10 }}
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: -5 }} aria-hidden />
        <div className="relative z-10 w-full pt-44">
          <div className="w-full px-6">
            <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Committees Card */}
              <button 
                onClick={() => document.getElementById('committees-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Image
                  src={getImagePath("/com.jpg")}
                  alt="Committees"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">Committees</h2>
                </div>
              </button>

              {/* Members Card */}
              <button 
                onClick={() => document.getElementById('members-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Image
                  src={getImagePath("/hero.jpg")}
                  alt="Members"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">Members</h2>
                </div>
              </button>

              {/* How to Join Card */}
              <button 
                onClick={() => document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Image
                  src={getImagePath("/howtojoin.jpg")}
                  alt="How to Join"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">How to Join</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees-section" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Committees
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the various committees that drive PESC's initiatives and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMITTEES.map((committee) => (
              <div 
                key={committee.name}
                onClick={() => openModal(committee)}
                className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">{committee.name}</h3>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--brand)]">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join-section" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Become part of PESC and make a difference in the engineering community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Why PESC */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join PESC?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[var(--brand)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Leadership Development</span> - Gain valuable leadership experience by taking on roles and responsibilities within the council
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[var(--brand)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Networking</span> - Connect with industry professionals, faculty, and fellow engineering students
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[var(--brand)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Professional Growth</span> - Develop skills that will benefit you in your academic and professional career
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[var(--brand)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Make an Impact</span> - Contribute to initiatives that improve the engineering student experience
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="/join"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--brand)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand)]"
                >
                  Join Now
                  <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/howtojoin.jpg")}
                alt="Students collaborating in PESC"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members-section" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the dedicated individuals who make PESC possible
            </p>
          </div>

          {/* Executive Board */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Executive Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members
                .filter(member => member.type === 'executive')
                .map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
            </div>
          </div>

          {/* Committee Heads */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Committee Heads</h3>
            <div className="space-y-8">
              {/* First row - 4 items */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {members
                  .filter(member => member.type === 'committee_head')
                  .slice(0, 4)
                  .map((member) => (
                    <div key={member.id} className="w-full">
                      <MemberCard member={member} />
                    </div>
                  ))}
              </div>
              
              {/* Second row - 5 items */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {members
                  .filter(member => member.type === 'committee_head')
                  .slice(4)
                  .map((member) => (
                    <div key={member.id} className="w-full">
                      <MemberCard member={member} />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* General Members */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Members</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {members
                .filter(member => member.type === 'member')
                .map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={getImagePath(member.image)}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.committee}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

