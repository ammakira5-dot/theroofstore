import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const siteTitle = "The Roof Store";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | The Roof Store`;
  const base = "https://www.theroofstore.net";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={`${base}${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={`${base}${canonical}`} />}
    </Helmet>
  );
}
