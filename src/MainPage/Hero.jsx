import { Code, Cpu, FileText, Wrench, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your College Projects,
            <span className="hero-gradient-text">Delivered</span>
          </h1>

          <p className="hero-subtitle">
            From concept to completion - we handle software development, hardware prototyping,
            documentation, Online Consultation, Online Guidance and everything in between for your academic
            success.
          </p>

          <div className="service-icons">
            <div className="service-icon">
              <div className="service-icon-bg">
                <Code className="icon" />
              </div>
              <span className="service-icon-text">Software</span>
            </div>

            <div className="service-icon">
              <div className="service-icon-bg">
                <Cpu className="icon" />
              </div>
              <span className="service-icon-text">Hardware</span>
            </div>

            <div className="service-icon">
              <div className="service-icon-bg">
                <FileText className="icon" />
              </div>
              <span className="service-icon-text">Documentation</span>
            </div>

            <div className="service-icon">
              <div className="service-icon-bg">
                <Wrench className="icon" />
              </div>
              <span className="service-icon-text">Prototypes</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-gradient">
              Get Started
              <ArrowRight className="icon" />
            </a>

            <a href="#portfolio" className="btn btn-outline">
              View Our Work
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">A-Z</div>
              <div className="stat-label">Complete Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
