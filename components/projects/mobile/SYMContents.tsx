"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";
import PageTransition from "../../PageTransition";
import React from "react";
import Image from "next/image";
import sym_1 from "../../../assets/image/sym_1.png";
import sym_2 from "../../../assets/image/sym_2.png";

export default function MobileSymptomSenseContent() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white">
        <BackButton onClick={() => router.back()} />

        <div className="w-full px-4 pt-20 pb-20">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-3">
              SymptomSense
            </h1>
            <p className="text-lg font-semibold text-blue-300 underline mb-6">
              🔗 <a href="https://symptomsense.vercel.app" target="_blank" rel="noopener noreferrer">Try it out</a>
            </p>
          </div>



          <div className="space-y-8">
            {/* Intro Section */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                Introduction
              </h3>
              <p className="text-sm leading-relaxed">
                SymptomSense is an <span className="text-yellow-400 font-semibold">AI-powered health assistant web app</span> that helps users better understand their symptoms, check the <span className="text-yellow-400 font-semibold">severity</span> of their condition, find safe <span className="text-yellow-400 font-semibold">medications</span>, and locate nearby <span className="text-yellow-400 font-semibold">clinics</span> — all in one place.
              </p>
            </section>

            {/* Features Section */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                🌟 Features
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Urgency Score</span> — Evaluate how serious the symptoms are.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Most Likely Condition</span> — Diagnosis from Gemini AI.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">What You Can Do Now</span> — Personalized first aid advice.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Recommended Clinic</span> — Type of clinic or specialist to visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">OTC Medication</span> — Safe non-prescription drugs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Nearby Hospitals</span> — Map view using Google Maps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Chat History</span> — MongoDB-powered symptom log.</span>
                </li>
              </ul>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                🧠 How It Works
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Prompt Engineering:</span> Role-specific structured prompts to ensure correct parsing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">AI Model:</span> Gemini API provides accurate condition analysis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">OpenFDA API:</span> Cross-reference symptoms with safe OTC medicine.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">Google Maps:</span> Uses Places + Maps JavaScript APIs for hospital location and map view.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  <span><span className="text-yellow-400 font-semibold">MongoDB:</span> Persistent chat history & symptom trend storage.</span>
                </li>
              </ul>
            </section>

            {/* Built With Section */}
            <section className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-gray-600 pb-2">
                💻 Built With
              </h3>
              <p className="text-sm leading-relaxed">
                <span className="text-yellow-400 font-semibold">Next.js</span>, <span className="text-yellow-400 font-semibold">TypeScript</span>, <span className="text-yellow-400 font-semibold">Tailwind CSS</span>, <span className="text-yellow-400 font-semibold">Gemini API</span>, <span className="text-yellow-400 font-semibold">OpenFDA API</span>, <span className="text-yellow-400 font-semibold">Google Maps API</span>, <span className="text-yellow-400 font-semibold">MongoDB Atlas</span>
              </p>
            </section>

            {/* Images Section */}
            <section className="space-y-4">
              <div className="w-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={sym_1}
                    alt="SymptomSense UI 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={sym_2}
                    alt="SymptomSense UI 2"
                    fill
                    className="object-cover"
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
