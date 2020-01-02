import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <>
      {data && (
        <Helmet
          htmlAttributes={{
            lang: lang || "EN"
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: "description",
              content: metaDescription
            },
            {
              property: "og:title",
              content: title
            },
            {
              property: "og:description",
              content: metaDescription
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              name: "twitter:card",
              content: "summary"
            },
            {
              name: "twitter:creator",
              content: data.site.siteMetadata.author
            },
            {
              name: "twitter:title",
              content: title
            },
            {
              name: "twitter:description",
              content: metaDescription
            }
          ]
            .concat(
              keywords && keywords.length > 0
                ? {
                    name: "keywords",
                    content: keywords.join(", ")
                  }
                : []
            )
            .concat(meta || [])}
        />
      )}
    </>
  );
}

export default SEO;
