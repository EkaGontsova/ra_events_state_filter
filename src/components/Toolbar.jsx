const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <ul className="toolbar">
      {filters.map((filter, index) => {
        const className = `toolbar__item${
          filter === selected ? " toolbar__item_selected" : ""
        }`;
        return (
          <li
            key={index}
            className={className}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
};

export default Toolbar;
