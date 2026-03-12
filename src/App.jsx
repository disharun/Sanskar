import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Project from "./components/Project";
import ProjectBanner from "./components/ProjectBanner";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <Project />
        <ProjectBanner />
      </main>
    </div>
  );
}

export default App;
