const AboutPage = () => {
  return (
    <>
      <div>
        <p>As a highly motivated and skilled web developer, I am passionate about creating responsive, user-friendly websites that deliver exceptional user experiences. With proficiency in HTML, CSS, JavaScript, React.js, TypeScript, PHP, Laravel, and Sass, I have the skills necessary to develop dynamic and robust web applications from concept to launch.

          In my previous role, I collaborated with cross-functional teams to develop innovative web solutions that aligned with business goals and delivered measurable results. I possess excellent problem-solving skills and thrive in a fast-paced environment that demands creativity and attention to detail.

          My expertise in front-end and back-end development, as well as my ability to integrate third-party APIs, enables me to develop customized web solutions that meet clients' unique needs. I keep up-to-date with the latest web development technologies and trends, and I am constantly seeking to improve my skills and knowledge to stay ahead of the curve.

          I am an effective communicator and team player, able to work independently or as part of a team, and I enjoy collaborating with clients and stakeholders to ensure their needs are met. I am seeking new opportunities to leverage my skills and experience to contribute to the success of a dynamic and innovative team.</p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
