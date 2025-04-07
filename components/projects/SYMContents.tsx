"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";
import PageTransition from "../PageTransition";
import LineLimitedParagraph from "../LineLimitedParagraph";
import React from "react";
import Image from "next/image";
import sym_bg from "../../assets/image/symptomsense_bg.jpg";
import sym_1 from "../../assets/image/sym_1.png";
import sym_2 from "../../assets/image/sym_2.png";

export default function SymptomSenseContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div
        className="relative min-h-[200vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${sym_bg.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10 pointer-events-none" />

        <BackButton onClick={() => router.back()} />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-white">
        <h1 className="text-center text-6xl md:text-7xl font-extrabold mb-2 drop-shadow">
  SymptomSense
</h1>
<p className="text-center text-lg md:text-xl font-semibold text-blue-300 underline mb-12">
  🔗 <a href="https://symptomsense.vercel.app" target="_blank" rel="noopener noreferrer">Try it out</a>
</p>


          <div className="bg-black/60 p-8 rounded-xl shadow-xl">
            {/* Intro Section */}
            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                Introduction
              </h3>
              <LineLimitedParagraph
                text="SymptomSense is an <strong class='text-yellow-400'>AI-powered health assistant web app</strong> that helps users better understand their symptoms, check the <strong class='text-yellow-400'>severity</strong> of their condition, find safe <strong class='text-yellow-400'>medications</strong>, and locate nearby <strong class='text-yellow-400'>clinics</strong> — all in one place."
              />
            </section>

            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                🌟 Features
              </h3>
              <ul className="list-disc list-inside text-base leading-relaxed">
                <li><strong className='text-yellow-400'>Urgency Score</strong> — Evaluate how serious the symptoms are.</li>
                <li><strong className='text-yellow-400'>Most Likely Condition</strong> — Diagnosis from Gemini AI.</li>
                <li><strong className='text-yellow-400'>What You Can Do Now</strong> — Personalized first aid advice.</li>
                <li><strong className='text-yellow-400'>Recommended Clinic</strong> — Type of clinic or specialist to visit.</li>
                <li><strong className='text-yellow-400'>OTC Medication</strong> — Safe non-prescription drugs.</li>
                <li><strong className='text-yellow-400'>Nearby Hospitals</strong> — Map view using Google Maps.</li>
                <li><strong className='text-yellow-400'>Chat History</strong> — MongoDB-powered symptom log.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                🧠 How It Works
              </h3>
              <ul className="list-disc list-inside text-base leading-relaxed">
                <li><strong className='text-yellow-400'>Prompt Engineering:</strong> Role-specific structured prompts to ensure correct parsing.</li>
                <li><strong className='text-yellow-400'>AI Model:</strong> Gemini API provides accurate condition analysis.</li>
                <li><strong className='text-yellow-400'>OpenFDA API:</strong> Cross-reference symptoms with safe OTC medicine.</li>
                <li><strong className='text-yellow-400'>Google Maps:</strong> Uses Places + Maps JavaScript APIs for hospital location and map view.</li>
                <li><strong className='text-yellow-400'>MongoDB:</strong> Persistent chat history & symptom trend storage.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">
                💻 Built With
              </h3>
              <p className="text-base leading-relaxed">
                <span className='text-yellow-400'>Next.js</span>, <span className='text-yellow-400'>TypeScript</span>, <span className='text-yellow-400'>Tailwind CSS</span>, <span className='text-yellow-400'>Gemini API</span>, <span className='text-yellow-400'>OpenFDA API</span>, <span className='text-yellow-400'>Google Maps API</span>, <span className='text-yellow-400'>MongoDB Atlas</span>
              </p>
            </section>

            {/* Images */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src={sym_1}
                  alt="SymptomSense UI 1"
                  className="rounded-xl shadow-2xl w-full"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={sym_2}
                  alt="SymptomSense UI 2"
                  className="rounded-xl shadow-2xl w-full"
                  placeholder="blur"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}