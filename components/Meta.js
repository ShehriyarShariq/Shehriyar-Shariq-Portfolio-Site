import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Shehriyar Shariq",
  keywords:
    "shehriyar, shariq, shehriyar shariq, developer, fullstack web developer, web developer, web dev, mobile, mobile developer, react.js, next.js, flutter, computer scientist, software engineer",
  description:
    "Shehriyar Shariq - A robost and multi-tooled Software Engineer with expertise in Full Stack Web and Mobile Development",
};

export default Meta;
