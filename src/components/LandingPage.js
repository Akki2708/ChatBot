import React, { useRef } from "react";

function LandingPage({ onFeatureNav, onStartChat }) {
  const aboutRef = useRef(null);
  const deptRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToDept = (e) => {
    e.preventDefault();
    deptRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Crystal Care Hospital Logo"
              className="home-logo"
            />
            <span>CRYSTAL CARE</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleScrollToAbout}>
                About
              </a>
            </li>
            <li>
              <a href="#department" onClick={handleScrollToDept}>
                Department
              </a>
            </li>
            <li>
              <a href="#doctors" onClick={() => onFeatureNav("doctors")}>
                Doctors
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScrollToContact}>
                Contact
              </a>
            </li>
            <li>
              <a href="#admin" onClick={() => onFeatureNav("admin")}>
                Admin
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Making Health Care Better Together</h1>
          <p className="hero-subtitle">
            Welcome to Crystal Care Hospital. We bring you world-class
            healthcare with compassion and expertise. Our team is dedicated to
            making your health journey better, together.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={onStartChat}>
              Start Chat
            </button>
            <button className="btn btn-secondary" onClick={handleScrollToDept}>
              View Department
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section ref={aboutRef} className="about-section">
        <div className="about-header">
          <h2 className="about-title">About Crystal Care Hospital</h2>
          <p className="about-subtitle">
            Delivering Excellence in Healthcare Since 1995
          </p>
        </div>

        {/* Hospital Overview */}
        <div className="about-overview">
          <div className="about-content">
            <div className="about-text">
              <h3>Our Story</h3>
              <p>
                Crystal Care Hospital was founded with a simple yet powerful
                mission: to provide exceptional healthcare that puts patients
                first. For over 25 years, we have been at the forefront of
                medical innovation, combining cutting-edge technology with
                compassionate care to deliver outstanding health outcomes for
                our community.
              </p>
              <p>
                Our state-of-the-art facility spans over 200,000 square feet and
                houses the latest medical equipment and technology. We are proud
                to be recognized as one of the region's leading healthcare
                institutions, serving thousands of patients annually with
                dedication and excellence.
              </p>
            </div>
            <div className="about-image">
              <div className="hospital-image-placeholder">
                <span className="image-icon">🏥</span>
                <p>Modern Hospital Facility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Doctors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional, patient-centered healthcare that
                improves the quality of life for our community through
                innovative medical practices, compassionate care, and continuous
                improvement in all aspects of healthcare delivery.
              </p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading healthcare institution recognized for
                excellence in patient care, medical innovation, and community
                health, setting the standard for healthcare delivery in the
                region and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h4>Compassion</h4>
              <p>We treat every patient with kindness, empathy, and respect.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>
                We strive for the highest standards in medical care and service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>
                We maintain the highest ethical standards in all our practices.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h4>Innovation</h4>
              <p>
                We embrace new technologies and methods to improve patient care.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h4>Teamwork</h4>
              <p>
                We collaborate effectively to provide the best patient outcomes.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h4>Quality</h4>
              <p>
                We are committed to delivering the highest quality healthcare.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-section">
          <h3 className="why-choose-title">
            Why Choose Crystal Care Hospital?
          </h3>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">👨‍⚕️</div>
              <h4>Expert Medical Team</h4>
              <p>
                Our team consists of highly qualified and experienced medical
                professionals who are dedicated to providing the best care
                possible.
              </p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🏥</div>
              <h4>State-of-the-Art Facility</h4>
              <p>
                Modern medical equipment and facilities ensure accurate
                diagnosis and effective treatment for all our patients.
              </p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">⏰</div>
              <h4>24/7 Emergency Care</h4>
              <p>
                Round-the-clock emergency services ensure that critical care is
                always available when you need it most.
              </p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">💊</div>
              <h4>Comprehensive Care</h4>
              <p>
                From preventive care to specialized treatments, we offer a full
                spectrum of healthcare services under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={deptRef} className="departments-section">
        <div className="departments-header">
          <h2 className="departments-title">
            Our Medical Departments & Specialties
          </h2>
          <p className="departments-subtitle">
            Comprehensive healthcare services delivered by expert medical
            professionals
          </p>
        </div>

        <div className="departments-grid">
          <div className="department-card">
            <div className="department-icon">❤️</div>
            <h3 className="department-title">Cardiology</h3>
            <p className="department-description">
              Expert heart care with advanced diagnostic and treatment
              facilities. Our cardiology team specializes in preventive care,
              interventional procedures, and cardiac rehabilitation.
            </p>
            <div className="department-features">
              <span className="feature-tag">ECG & Echo</span>
              <span className="feature-tag">Angioplasty</span>
              <span className="feature-tag">Cardiac Surgery</span>
            </div>
          </div>

          <div className="department-card">
            <div className="department-icon">🦴</div>
            <h3 className="department-title">Orthopedics</h3>
            <p className="department-description">
              Comprehensive bone and joint care with modern surgical techniques.
              From sports injuries to joint replacements, we provide complete
              orthopedic solutions.
            </p>
            <div className="department-features">
              <span className="feature-tag">Joint Replacement</span>
              <span className="feature-tag">Sports Medicine</span>
              <span className="feature-tag">Spine Surgery</span>
            </div>
          </div>

          <div className="department-card">
            <div className="department-icon">👶</div>
            <h3 className="department-title">Pediatrics</h3>
            <p className="department-description">
              Specialized care for children with a child-friendly environment.
              Our pediatric team ensures the health and well-being of children
              from birth through adolescence.
            </p>
            <div className="department-features">
              <span className="feature-tag">Child Care</span>
              <span className="feature-tag">Vaccinations</span>
              <span className="feature-tag">Growth Monitoring</span>
            </div>
          </div>

          <div className="department-card">
            <div className="department-icon">🧴</div>
            <h3 className="department-title">Dermatology</h3>
            <p className="department-description">
              Advanced skin care treatments and cosmetic procedures. From
              medical dermatology to aesthetic treatments, we provide
              comprehensive skin health solutions.
            </p>
            <div className="department-features">
              <span className="feature-tag">Skin Treatments</span>
              <span className="feature-tag">Cosmetic Procedures</span>
              <span className="feature-tag">Laser Therapy</span>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Get in touch with our healthcare professionals. We're here to help
            you 24/7.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3 className="contact-card-title">Phone & Emergency</h3>
              <div className="contact-details">
                <p>
                  <strong>General Inquiries:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Emergency Hotline:</strong> +1 (555) 999-8888
                </p>
                <p>
                  <strong>Appointment Booking:</strong> +1 (555) 123-4568
                </p>
                <p>
                  <strong>24/7 Support:</strong> Available Round the Clock
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3 className="contact-card-title">Email & Digital</h3>
              <div className="contact-details">
                <p>
                  <strong>General Info:</strong> info@crystalcarehospital.com
                </p>
                <p>
                  <strong>Appointments:</strong>{" "}
                  appointments@crystalcarehospital.com
                </p>
                <p>
                  <strong>Emergency:</strong> emergency@crystalcarehospital.com
                </p>
                <p>
                  <strong>Support:</strong> support@crystalcarehospital.com
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-card-title">Location & Address</h3>
              <div className="contact-details">
                <p>
                  <strong>Main Hospital:</strong>
                </p>
                <p>123 Wellness Avenue</p>
                <p>Healthy City, State 12345</p>
                <p>
                  <strong>Branch Clinic:</strong>
                </p>
                <p>456 Health Boulevard</p>
                <p>Medical District, State 12346</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3 className="contact-card-title">Operating Hours</h3>
              <div className="contact-details">
                <p>
                  <strong>Emergency Department:</strong> 24/7
                </p>
                <p>
                  <strong>Outpatient Services:</strong>
                </p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>
                  <strong>Specialist Clinics:</strong>
                </p>
                <p>By Appointment Only</p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h3 className="map-title">Find Us</h3>
            <div className="map-container">
              <iframe
                title="Crystal Care Hospital Location"
                src="https://www.google.com/maps?q=New+York+City+Hospital&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-info">
              <p>
                <strong>Parking:</strong> Free parking available for patients
                and visitors
              </p>
              <p>
                <strong>Public Transport:</strong> Bus routes 101, 102, 103 stop
                nearby
              </p>
              <p>
                <strong>Accessibility:</strong> Wheelchair accessible with
                dedicated parking
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
