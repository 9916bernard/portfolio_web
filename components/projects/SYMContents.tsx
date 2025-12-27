"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import LineLimitedParagraph from "../LineLimitedParagraph";
import React from "react";
import Image from "next/image";
import sym_1 from "../../assets/image/sym_1.png";
import sym_2 from "../../assets/image/sym_2.png";

export default function SymptomSenseContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[200vh] bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent z-10 pointer-events-none" />

        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 text-white">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              SymptomSense
            </h1>
            <a
              href="https://symptomsense.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-cyan-300 hover:text-cyan-200 transition-colors duration-300 group"
            >
              <span className="group-hover:underline">Try it out</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Intro Section */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-white">Introduction</h3>
                </div>
                <LineLimitedParagraph
                  text="SymptomSense is an <strong class='text-cyan-400'>AI-powered health assistant web app</strong> that helps users better understand their symptoms, check the <strong class='text-cyan-400'>severity</strong> of their condition, find safe <strong class='text-cyan-400'>medications</strong>, and locate nearby <strong class='text-cyan-400'>clinics</strong> — all in one place."
                />
              </div>
            </section>

            {/* Features Section */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-white">Features</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>Urgency Score</strong>
                    <p className="text-gray-300">Evaluate how serious the symptoms are.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>Most Likely Condition</strong>
                    <p className="text-gray-300">Diagnosis from Gemini AI.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>What You Can Do Now</strong>
                    <p className="text-gray-300">Personalized first aid advice.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>Recommended Clinic</strong>
                    <p className="text-gray-300">Type of clinic or specialist to visit.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>OTC Medication</strong>
                    <p className="text-gray-300">Safe non-prescription drugs.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300">
                    <strong className='text-cyan-400 text-lg block mb-2'>Nearby Hospitals</strong>
                    <p className="text-gray-300">Map view using Google Maps.</p>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-300 md:col-span-2">
                    <strong className='text-cyan-400 text-lg block mb-2'>Chat History</strong>
                    <p className="text-gray-300">MongoDB-powered symptom log.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-white">How It Works</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start bg-black/40 p-5 rounded-xl border border-gray-700/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className='text-cyan-400'>Prompt Engineering:</strong>
                      <span className="text-gray-300 ml-2">Role-specific structured prompts to ensure correct parsing.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-black/40 p-5 rounded-xl border border-gray-700/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className='text-cyan-400'>AI Model:</strong>
                      <span className="text-gray-300 ml-2">Gemini API provides accurate condition analysis.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-black/40 p-5 rounded-xl border border-gray-700/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className='text-cyan-400'>OpenFDA API:</strong>
                      <span className="text-gray-300 ml-2">Cross-reference symptoms with safe OTC medicine.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-black/40 p-5 rounded-xl border border-gray-700/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className='text-cyan-400'>Google Maps:</strong>
                      <span className="text-gray-300 ml-2">Uses Places + Maps JavaScript APIs for hospital location and map view.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-black/40 p-5 rounded-xl border border-gray-700/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className='text-cyan-400'>MongoDB:</strong>
                      <span className="text-gray-300 ml-2">Persistent chat history & symptom trend storage.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Built With Section */}
            <section className="group">
              <div className="bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-white">Built With</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'OpenFDA API', 'Google Maps API', 'MongoDB Atlas'].map((tech) => (
                    <span key={tech} className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 font-semibold hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="group/img relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover/img:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src={sym_1}
                    alt="SymptomSense UI 1"
                    className="relative rounded-2xl shadow-2xl w-full transform group-hover/img:scale-105 transition duration-500"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="group/img relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover/img:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src={sym_2}
                    alt="SymptomSense UI 2"
                    className="relative rounded-2xl shadow-2xl w-full transform group-hover/img:scale-105 transition duration-500"
                    placeholder="blur"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
