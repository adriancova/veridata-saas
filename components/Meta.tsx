// Copyright 2023 the Deno authors. All rights reserved. MIT license.
export interface MetaProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function Meta({
  title,
  description,
  imageUrl,
  href,
}: MetaProps) {
  const organizationSchema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'Veridata',
    url: 'https://www.veridata.lat',
    sameAs: [],
  };
  const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DE0K3SR2J4');`;
  return (
    <>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <link rel='canonical' href='https://www.veridata.lat' />
      {imageUrl && <meta itemProp='image' content={imageUrl} />}

      {/* Facebook Meta Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Veridata' />
      <meta property='og:locale' content='es' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {href && <meta property='og:url' content={href} />}
      {imageUrl && <meta property='og:image' content={imageUrl} />}

      {/* Twitter Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <link rel='stylesheet' href='css/animate.css' />
      <link rel='stylesheet' href='css/ud-styles.css' />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
      <script src='js/wow.min.js'></script>
      <script src='js/main.js'></script>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DE0K3SR2J4'
      ></script>
      <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
    </>
  );
}
