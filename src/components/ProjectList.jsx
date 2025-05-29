const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects.map((item, index) => {
        return (
          <li key={index} className="project-list__item">
            <img
              className="project-list__img"
              src={item.img}
              alt={`image of ${item.category} category`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
