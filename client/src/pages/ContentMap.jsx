import React from "react";
import { Map } from "lucide-react";
import {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
} from "@/data/Chapter1Data";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function ContentMap() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-5 space-y-8">
      <Header />
      <ContentList />

      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="mt-10 w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center gap-4 p-4 relative">
      <Link
        to="/learn-js"
        className="underline absolute left-0 top-0 text-zinc-700 dark:text-zinc-500 hover:text-green-600"
      >
        Back to home
      </Link>
      <Map
        size={50}
        className="mb-5 text-zinc-500 dark:text-zinc-500 animate-pulse"
      />
      <h1 className="text-2xl font-medium">CodeScript Content Map</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        List of lessons and topics
      </p>
    </div>
  );
};

const ContentList = () => {
  return (
    <div className="mt-10 w-full max-w-screen-lg mx-auto grid md:grid-cols-3 gap-2">
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 1</h3>
          <h1 className="text-lg font-semibold">Introduction to JavaScript</h1>
          <ul className="mt-8 space-y-2">
            {Lesson1.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={`/learn-js/${lesson.link}`}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 2</h3>
          <h1 className="text-lg font-semibold">JavaScript Basics </h1>
          <ul className="mt-8 space-y-2">
            {Lesson2.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 3</h3>
          <h1 className="text-lg font-semibold">Control Structures </h1>
          <ul className="mt-8 space-y-2">
            {Lesson3.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 4</h3>
          <h1 className="text-lg font-semibold">Functions in JavaScript </h1>
          <ul className="mt-8 space-y-2">
            {Lesson4.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 5</h3>
          <h1 className="text-lg font-semibold">
            JavaScript Objects and Arrays
          </h1>
          <ul className="mt-8 space-y-2">
            {Lesson5.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 6</h3>
          <h1 className="text-lg font-semibold">DOM Manipulation </h1>
          <ul className="mt-8 space-y-2">
            {Lesson6.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 7</h3>
          <h1 className="text-lg font-semibold">JavaScript Events </h1>
          <ul className="mt-8 space-y-2">
            {Lesson7.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border border-zinc-100 dark:border-zinc-800 p-5 rounded h-[300px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-green-700">Lesson 8</h3>
          <h1 className="text-lg font-semibold">Error Handling </h1>
          <ul className="mt-8 space-y-2">
            {Lesson8.map((lesson) => (
              <li
                key={lesson.id}
                className="list-decimal list-inside text-zinc-700 dark:text-zinc-400"
              >
                <Link
                  to={lesson.link}
                  className="underline hover:text-green-600"
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
