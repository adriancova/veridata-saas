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
  return (
    <>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {imageUrl && <meta itemProp='image' content={imageUrl} />}

      {/* Facebook Meta Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={title} />
      <meta property='og:locale' content='en' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {href && <meta property='og:url' content={href} />}
      {imageUrl && <meta property='og:image' content={imageUrl} />}

      {/* Twitter Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      <link
        href='https://fonts.googleapis.com/css?family=Hind+Vadodara:400,700|Mukta:500,700'
        rel='stylesheet'
      />
      <link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
      <link rel='stylesheet' href='/assets/css/animate.css' />
      <link rel='stylesheet' href='/assets/css/lineicons.css' />
      <link rel='stylesheet' href='/assets/css/ud-styles.css' />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
    </>
  );
}
