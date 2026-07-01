import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  geo?: {
    region?: string;
    placename?: string;
    position?: string;
  };
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = "https://www.theroofstore.net/assets/images/Waterproofing-Technology.jpg";
const BASE_URL = "https://www.theroofstore.net";

export function SEO({ title, description, canonical, ogImage, schema, geo, noindex }: SEOProps) {
  const siteTitle = "The Roof Store";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | The Roof Store`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  const schemaArray = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {geo?.region && <meta name="geo.region" content={geo.region} />}
      {geo?.placename && <meta name="geo.placename" content={geo.placename} />}
      {geo?.position && <meta name="geo.position" content={geo.position} />}
      {geo?.position && <meta name="ICBM" content={geo.position.replace(";", ", ")} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Roof Store" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
