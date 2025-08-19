import Header from '../header/Header'
import Hero from './Hero'
import FilterSection from './FilterSection'
import ProtfolioSection from './ProtfolioSection'
import Stats from './Stats'
import Footer from '../Footer/FooterCommon';
import { useEffect } from 'react'
import "/styles/protfolioStyle.css"
import "/styles/headerStyle.css"
import "/styles/footerStyle.css"

function Protfolio() {

    return (
        <>
            <Header />
            <Hero />
            <FilterSection />
            <ProtfolioSection />
            <Stats />
            <Footer />
        </>
    )
}

export default Protfolio