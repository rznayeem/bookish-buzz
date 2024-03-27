const About = () => {
  return (
    <div className="work-font space-y-6 m-5 lg:m-0">
      <div className="text-center space-y-6">
        <h1 className="playfair-font font-bold text-5xl">
          Welcome to Bookish Buzz
        </h1>
        <hr />
        <p>
          At bookish Buzz, we are passionate about books and the transformative
          power of literature. <br /> Our platform is dedicated to providing
          book lovers with a space to discover, <br /> discuss, and celebrate
          their favorite reads.
        </p>
      </div>
      <hr />
      <div className="space-y-6">
        <div>
          <h1 className="font-bold text-2xl">Our Mission</h1>
          <div>
            <p>
              Our mission is simple: to connect readers with books that inspire,
              entertain, and provoke thought. We believe in the magic of
              storytelling and the profound impact that books can have on
              individuals and communities.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">What We Offer</h1>
          <div>
            <li>
              <span className="font-semibold text-xl">In-Depth Reviews:</span>{' '}
              Our team of avid readers and literary enthusiasts carefully
              curates insightful reviews for a wide range of genres and styles.
              Whether you're looking for the latest bestseller or a hidden gem,
              we've got you covered.
            </li>
            <li>
              <span className="font-semibold text-xl">Author Spotlights:</span>{' '}
              We shine a spotlight on talented authors, showcasing their work
              and sharing exclusive interviews and behind-the-scenes glimpses
              into their creative process.
            </li>
            <li>
              <span className="font-semibold text-xl">
                Community Engagement:
              </span>
              Join our vibrant community of book enthusiasts to share
              recommendations, participate in discussions, and connect with
              fellow readers from around the world.
            </li>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Get Involved</h1>
          <div>
            <p>
              Whether you're a lifelong bookworm or just starting your literary
              journey, we invite you to explore all that Bookish Buzz has to
              offer. Join us in our mission to celebrate the written word and
              spread the joy of reading far and wide. Thank you for being a part
              of our story!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
