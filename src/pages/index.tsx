import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-3xl">
          Elevate Your Learning Journey with Wahyudi.dev's Upcoming Course
          Enhancements!
        </h1>
        <p className="mt-6 text-base leading-7 text-white">
          Stay tuned for our revamped courses, designed to take your learning
          experience to new heights at Wahyudi.dev!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            about="_blank"
            href="https://wahyudi.dev"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Personal Website
          </a>
          <a
            href="mailto:business@wahyudi.dev"
            className="text-sm font-semibold text-white"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
