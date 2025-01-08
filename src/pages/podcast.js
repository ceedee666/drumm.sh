import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiCalendar, BiTime } from "react-icons/bi";
import moment from "moment";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogListItem, blogDateTime, podcastDescription} from "../styles/podcast.module.scss";

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query podcastEpisodes {
      allFeedPodcastEpisodes(sort: { fields: [isoDate], order: DESC }) {
        edges {
          node {
            title
            content
            isoDate
            link
            itunes {
              duration
            }
          }
        }
      }
    }
  `);

  const getEmbedURL = (link) => {
    // Handle Spotify links
    if (link.includes("spotify.com")) {
      const match = link.match(/episodes\/([a-zA-Z0-9\-]+)/);
      if (match) {
        return `https://creators.spotify.com/pod/show/christiandrumm/embed/episodes/${match[1]}`;
      }
    }

    return null;
  };

  return (
    <Layout pageInfo={{ pageName: "podcast" }}>
      <SEO title="drumm.sh | Podcast" />
      {data.allFeedPodcastEpisodes.edges.map(({ node }, index) => {
        const embedURL = getEmbedURL(node.link);

        return (
          <div className={blogListItem} key={index}>
            <h2>{node.title}</h2>
            <Row>
              <Col className={blogDateTime}>
                <BiCalendar /> {moment(node.isoDate).format("DD. MMMM YYYY")}
                {" "}
                &bull; <BiTime /> {node.itunes.duration} min 
              </Col>
            </Row>
            <Row>
              <Col className="mt-2 mb-5">
                <div
                  className={podcastDescription}
                  dangerouslySetInnerHTML={{ __html: node.content }}
                ></div>
              </Col>
            </Row>
            {embedURL && (
              <Row>
                <Col>
                  <iframe
                    title={`Player for ${node.title}`}
                    src={embedURL}
                    height="200"
                    width="100%"
                    frameborder="0"
                  ></iframe>
                </Col>
              </Row>
            )}
          </div>
        );
      })}
    </Layout>
  );
};

export default PodcastPage;
