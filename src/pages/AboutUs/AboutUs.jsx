import { useState, useEffect } from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const [stats, setStats] = useState([
    { value: 100, suffix: 'B+', label: 'Mortgage volume funded', isCounting: false },
    { value: 300, suffix: 'K+', label: 'Customers served', isCounting: false },
    { value: 50, suffix: '', label: 'States where we operate', isCounting: false },
    { value: 1000, suffix: '+', label: 'Team members', isCounting: false }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(prevStats => prevStats.map(stat => ({ ...stat, isCounting: true })));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.aboutUs}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Our mission</h1>
            <p>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>
          </div>
        </div>
      </section>

      
      <section className={styles.statusQuo}>
        <div className={styles.container}>
          <div className={styles.statusQuoGrid}>
            <div className={styles.statusQuoContent}>
              <h2>The Status Quo is Broken</h2>
              <p>
                The traditional mortgage process is slow, opaque, and expensive. 
                It's filled with unnecessary complexity that benefits lenders at the expense of homeowners.
              </p>
              <p>
                We're changing that by building a transparent, digital-first mortgage experience 
                that puts the customer in control.
              </p>
              <a href="/vishals-story" className={styles.storyButton}>
                Read Vishal's story
              </a>
            </div>
            <div className={styles.statusQuoVideo}>
              <div className={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/1KjYlLBM9j4"
                  title="Better.com - Transforming Homeownership"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Changing Things Section */}
      <section className={styles.changingThings}>
        <div className={styles.container}>
          <h2>How we're changing things</h2>
          <p>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15
             trillion. Yet home finance operates in the same way it has for decades — through opaque systems and 
             expensive intermediaries whose interests are misaligned with consumers’.</p>
           <p>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to 
            make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
        </div>
      </section>

   
     
<section className={styles.timeline}>
  <div className={styles.container}>
    <h2>Company timeline</h2>
    <div className={styles.timelineContainer}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2014</div>
        <div className={styles.timelineContent}>
          <p>After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2015</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2016</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2017</div>
        <div className={styles.timelineContent}>
          <p>Better expands into the real estate market with Better Real Estate.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2018</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2019</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2022</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>2023</div>
        <div className={styles.timelineContent}>
          <p>Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.</p>
          <p>Better Mortgage launches the fully digital 3-day HELOC².</p>
          <p>Better Mortgage launches One Day Verified Approval Letter.</p>
        </div>
      </div>
      
      <div className={styles.timelineItem}>
        <div className={styles.timelineYear}>Today</div>
        <div className={styles.timelineContent}>
          <p>You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
          <button className={styles.timelineButton}>Get Started</button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Related Posts Section */}
      <section className={styles.relatedPosts}>
        <div className={styles.container}>
          <h2>Related posts</h2>
          <div className={styles.postsGrid}>
            <div className={styles.postCard}>
              <div className={styles.postImage}>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="Homeownership" />
              </div>
              <div className={styles.postContent}>
                <h3>The future of homeownership is digital</h3>
                <p>How technology is transforming the way we buy and finance homes.</p>
                <a href="/blog/future-of-homeownership" className={styles.readMore}>Read more</a>
              </div>
            </div>
            <div className={styles.postCard}>
              <div className={styles.postImage}>
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team" />
              </div>
              <div className={styles.postContent}>
                <h3>Building a culture of innovation</h3>
                <p>Inside Better's approach to creating a workplace that fosters creativity.</p>
                <a href="/blog/culture-of-innovation" className={styles.readMore}>Read more</a>
              </div>
            </div>
            <div className={styles.postCard}>
              <div className={styles.postImage}>
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80" alt="Technology" />
              </div>
              <div className={styles.postContent}>
                <h3>How we built our mortgage technology</h3>
                <p>A technical deep dive into Better's proprietary mortgage platform.</p>
                <a href="/blog/mortgage-technology" className={styles.readMore}>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;