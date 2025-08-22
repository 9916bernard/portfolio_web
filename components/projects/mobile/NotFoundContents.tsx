"use client";

import { useRouter } from "next/navigation";
import BackButton from "../../BackButton";

export default function MobileNotFoundContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <BackButton onClick={() => router.back()} />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-sm text-gray-300">Sorry, we couldn&apos;t find that project.</p>
      </div>
    </div>
  );
}
