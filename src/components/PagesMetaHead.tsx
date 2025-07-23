import Head from 'next/head';

interface PagesMetaHeadProps {
  title?: string;
  keywords?: string;
  description?: string;
}

function PagesMetaHead({ title = 'Emma. Portfolio', keywords = 'emmanuel, ovansa, portfolio, web designer, web developer, web developer in nigeria', description }: PagesMetaHeadProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon-1.jpg" />
      <title>{title}</title>
    </Head>
  );
}

export default PagesMetaHead;