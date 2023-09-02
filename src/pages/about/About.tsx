import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My story</span>

      <div className="about__container container grid">
        <img
          src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1693478106/Portfolio/Public/about/about-main.jpg"
          alt=""
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <h3 className="about__subtitle">Introduction</h3>
          <p className="about__description">
            I grew up in Tokyo, binging on American movies and TV shows like it
            was my job. Obviously, that got me dreaming about exploring the good
            ol' USA. Fast forward to when I was 15 – I hopped on a plane to
            Georgia, did the whole international exchange student thing for a
            year.
          </p>
          <p className="about__description">
            After finishng high school, I went on a wild college adventure. From
            the sunny vibes of the Bay Area in California to the wild plains of
            Wyoming, and even the quiet rural areas of upstate New York – I've
            been around. College was a mix of playing collegiate football and
            various explorations, yet struggled to define my career direction.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1693469897/Portfolio/Public/about/about-football.jpg"
          alt=""
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <p className="about__description">
            Now here's the twist: in 2019, Out of nowhere, I felt this urge to
            learn Spanish. Yeah, I failed it in high school, flunked it in
            college, but guess what? Duolingo became my new BFF and picked it up
            like a champ. Suddenly, Spanish-speaking countries were on my radar,
            and I decided Mexico was my answer. I hustled my way to level up my
            Spanish, enough to talk my way into jobs.
          </p>

          <p className="about__description">
            Eventually, I got a job in a logistics company in Mexico, and worked
            as an Assistant Manager for nearly three years. I jumped to Casio
            after that, tried the whole Sales Planning Executive thing, realized
            it wasn't my scene, and made a quick exit. That's when I got that
            lightbulb moment – tech was where I belonged. Packed my bags, came
            back to Japan in 2023, completed a web development bootcamp at Le
            Wagon, and now I'm working as a frontend developer in Tokyo.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1693478106/Portfolio/Public/about/about-mexico.jpg"
          alt=""
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <h3 className="about__subtitle">Path to coding</h3>
          <p className="about__description">
            Let me be real though – I was lost in the career maze for a while.
            working in a corporate environment made me realize that job titles
            mattered. I started thinking that work eats up most of our lives, so
            I better start caring about what I'm doing. During my time in Mexico
            City, I met a bunch of digital nomads and thought, "Hey, that's the
            dream – coding from a beach somewhere"
          </p>
          <p className="about__description">
            Spoiler alert: it's not as straightforward as it seems. But back
            then, I was on a fantasy trip. Initially, programming seemed as
            alien languages to me. But dang, learning them was a blast. The more
            I dug in, the more I realized coding was my thing. So, I took the
            plunge – joined a web development bootcamp and started going to tech
            meetups, got to know a lot of tech fanatics, and had a total mindset
            makeover. Now, I'm all about coding, soaking up new tech, and
            blazing trails in the wild world of development.
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1693469917/Portfolio/Public/about/about-boxing.jpg"
          alt=""
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <h3 className="about__subtitle">Interests</h3>
          <p className="about__description">
            When I'm not coding, you'll catch me sweating it out in sports, I've
            been all about football since I was a kid, playing my way through
            college and still kicking it in those weekend pick-up matches. Oh,
            and by the way, I'm a die-hard Manchester United fan – I also boxed
            for 3 years in Mexico and I love watching boxing matches. Other than
            that, I also like watching Spanish TV shows and traveling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
