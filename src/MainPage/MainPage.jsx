import Header from '../header/Header';
import Contact from './Contact';
import Features from './Features';
import Footer from '../Footer/Footer';
import Hero from './Hero';
import Services from './Services';
import { useEffect } from 'react';

function MainPage() {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/src/styles/styleFull.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.href = "/src/styles/headerStyle.css";
        document.head.appendChild(link2);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Features />
            <Contact />
            <Footer />
        </>
    );
}

export default MainPage