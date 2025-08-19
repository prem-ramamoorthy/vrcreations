import data from '/src/data/Protfolio/filterButtons.json';
import { useState, useEffect } from 'react';

function FilterSection({ activeFilter, setActiveFilter }) {
  const [buttonsName, setButtons] = useState([]);

  useEffect(() => {
    setButtons(data);
  }, []);

  return (
    <section className="filter-section">
      <div className="container">
        <div className="filter-tabs">
          {buttonsName.map((button, index) => (
            <button
              key={index}
              className={`filter-tab ${activeFilter === button.buttonName ? 'active' : ''}`}
              onClick={() => setActiveFilter(button.buttonName)}
            >
              {button.buttonName}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterSection;
