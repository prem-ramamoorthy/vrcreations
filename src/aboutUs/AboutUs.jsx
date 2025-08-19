import '../styles/aboutusStyle.css'
import Hero from './Hero'
import AboutSection from './AboutSection'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

function AboutUs() {

    return (
        <div className='about-us-page'>
            <Header />
            <Hero />
            <AboutSection />
            <TeamSection/>
            <ValuesSection/>
            <Footer/>
        </div>
    )
}

export default AboutUs