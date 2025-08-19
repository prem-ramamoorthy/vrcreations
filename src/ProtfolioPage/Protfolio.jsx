import '../styles/protfolioStyle.css'
import Header from '../header/Header'
import Hero from './Hero'
import FilterSection from './FilterSection'
import ProtfolioSection from './ProtfolioSection'
import Stats from './Stats'
import Footer from '../Footer/Footer';

function Protfolio() {

    return (
        <div className='protfolio-page'>
            <Header />
            <Hero />
            <FilterSection />
            <ProtfolioSection />
            <Stats />
            <Footer />
        </div>
    )
}

export default Protfolio