import Head from 'next/head';

interface IProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const Header: React.FC<IProps> = ({
  description = 'NFT Valuations Admin Panel',
  title = 'Admin Panel',
  keywords = [],
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name={description} content="This is a sample description." />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://static.nftvaluations.com/images/apple-touch-icon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="180x180"
        href="https://static.nftvaluations.com/images/apple-touch-icon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://static.nftvaluations.com/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://static.nftvaluations.com/images/favicon-16x16.png"
      />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </Head>
  );
};

export default Header;
