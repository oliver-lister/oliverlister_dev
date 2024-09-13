"use client";

import { useState } from "react";
import TechnologyCard from "./TechnologyCard";
import Input from "@/components/Input/Input";
import technologiesArr from "./technologiesArr";

export default function Technologies() {
  const [searchText, setSearchText] = useState<string>("");

  const filteredTechnologies = technologiesArr.filter((tech) =>
    tech.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section id="technlogies" className="bg-zinc-300 dark:bg-zinc-700">
      <div className="wrapper grid gap-6">
        <div className="grid items-center justify-center">
          <h2 className="text-4xl font-semibold text-primary dark:text-secondary">
            Technologies
          </h2>
        </div>
        <div className="grid gap-1">
          <label htmlFor="search-technologies" className="text-sm">
            Search Technologies
          </label>
          <Input
            id="search-technologies"
            type="text"
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className="border-2 py-2 px-3 text-md rounded-lg border-primary bg-secondary text-primary | dark:border-secondary dark:bg-primary"
          />
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTechnologies.length > 0 ? (
            filteredTechnologies.map((tech) => (
              <TechnologyCard
                key={tech.title}
                imageSrc={tech.imageSrc}
                shadowClr={tech.shadowClr}
                title={tech.title}
              />
            ))
          ) : (
            <p>No technologies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
