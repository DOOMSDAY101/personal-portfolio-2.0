import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({ title, description, image }) {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID');
    `}
      </script>
      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "Portfolio",
        "headline": "Ifeoluwa Sulaiman website/Portolio",
        "author": {
          "@type": "Person",
          "name": "Ifeoluwa Sulaiman"
        },
        "datePublished": "2024-011-08",
        "description": "Ifeoluwa Sulaiman is a dedicated and passionate full-stack web developer with over two years of hands-on experience in crafting websites with stunning UI and responsive design, coupled with robust backend development skills."
      }
    `}
      </script>
      <title>{title}</title>
      <meta http-equiv="content-language" content="en" />
      <meta name='description' content={description} />
      <meta name='keywords' content='developer, programmer, website, backend, frontend, web developer, freelancer, fullstack, software, engineer, software engineer, React, Node, SQL, Ifeoluwa, Sulaiman, Ifeoluwa Sulaiman, FullStack developer' />
      <meta name='author' content='Ifeoluwa Sulaiman' />
      <meta name="robots" content="index,follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
