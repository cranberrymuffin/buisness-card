import './home.css';

export default function BusinessCard() {
  return (
    <main id="home">
      <h1 className="site-title">
        EAST RIVER
        <br />
        TECHNOLOGY
      </h1>
      <p className="site-tagline">
        crafting custom software solutions for your business
      </p>
      <a href="mailto:contact@eastriver.technology" className="contact-btn">
        Contact
      </a>
    </main>
  );
}
