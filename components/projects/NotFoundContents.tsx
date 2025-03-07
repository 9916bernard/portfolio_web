"use client";

import { useRouter } from "next/navigation";
import BackButton from "../BackButton";

export default function NotFoundContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <BackButton onClick={() => router.back()} />
      <h1 className="text-3xl font-bold mb-4">Project not found</h1>
      <p className="text-lg">Sorry, we couldn't find that project.</p>
    </div>
  );
}
