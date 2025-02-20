import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is About Page.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-3">About Page</h1>
      <p className=" text-gray-600">
        This page was created using NextJS&apos;s app routing system with
        TailwindCSS.
      </p>
    </main>
  );
}
