import { useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";

import { useTheme } from "../hooks/useTheme";

export default function Main() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery}></Searchbar>
          <SelectMenu setQuery={setQuery}></SelectMenu>
        </div>

        <CountryList query={query}></CountryList>
      </main>
    </>
  );
}
