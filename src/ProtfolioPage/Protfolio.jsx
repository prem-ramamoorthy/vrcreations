import '../styles/protfolioStyle.css'
import Header from '../header/Header'
import Hero from './Hero'
import FilterSection from './FilterSection'
import ProtfolioSection from './ProtfolioSection'
import Stats from './Stats'
import Footer from '../Footer/Footer';
import { useState } from 'react'

function Protfolio() {

    const [activeFilter, setActiveFilter] = useState('All Projects');

    return (
        <div className='protfolio-page'>
            <Header />
            <Hero />
            <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <ProtfolioSection activeFilter={activeFilter} />
            <Stats />
            <Footer />
        </div>
    )
}

export default Protfolio