import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import data from "./data.jsx";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

const Portfolio = () => {
  const [selected, setSelected] = useState("All");
  const [images, setImages] = useState(data);

  const handleFilterSet = (clickedFilter) => {
    setSelected(clickedFilter);
    setImages(
      clickedFilter === "All"
        ? data
        : data.filter((element) => element.category === clickedFilter)
    );
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleFilterSet}
      />
      <ProjectList projects={images} />
    </div>
  );
};

export default Portfolio;
