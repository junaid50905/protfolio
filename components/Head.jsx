import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>Junaid Hossain | A Fullstack Web Developer</title>
      <meta
        name="description"
        content="Junaid Hossain is an full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Junaid Hossain, web developer portfolio, Junaid Hossain web developer, Junaid Hossain developer, Junaid Hossain portfolio"
      />
      <meta property="og:title" content="Junaid Hossain's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Junaid Hossain',
};