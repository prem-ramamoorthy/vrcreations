import data from '/src/data/Protfolio/filterButtons.json'
import { useState, useEffect } from 'react'

function FilterSection() {

    const [buttonsName, setButtons] = useState([]);

    useEffect(() => {
        setButtons(data);
    }, [])

    const ButtonComponents = buttonsName.map((button, index) => {
        return (
            index == 0 ? <button className="filter-tab active" key={index}>{button.buttonName}</button> : <button className="filter-tab" key={index}>{button.buttonName}</button>
        );
    });

    return (
        <section className="filter-section">
            <div className="container">
                <div className="filter-tabs">
                    {ButtonComponents}
                </div>
            </div>
        </section>
    )
}

export default FilterSection