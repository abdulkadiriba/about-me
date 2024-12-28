import React from "react";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";

function App() {

  return (
    <div className="dark min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
