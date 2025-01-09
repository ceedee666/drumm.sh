import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiCalendar, BiTime } from "react-icons/bi";
import { FaSpotify, FaRss } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import moment from "moment";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  blogListItem,
  blogDateTime,
  podcastDescription,
  podcastAudio,
  podcastSeparator,
  podcastLinks,
} from "../styles/podcast.module.scss";

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
            enclosure {
              url
              length
              type
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "podcast" }}>
      <SEO title="drumm.sh | Podcast" />
      {data.allFeedPodcastEpisodes.edges.map(({ node }, index) => {
        const audioURL = node.enclosure?.url;
        return (
          <div key={index}>
            <div className={blogListItem} key={index}>
              <Row className="align-items-center">
                <h2>
                  {node.title}
                  {"  "}
                  <div className={podcastLinks}>
                    <a
                      href={node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen on Spotify"
                    >
                      <FaSpotify />
                    </a>
                    <a
                      href="https://podcasts.apple.com/us/podcast/code-und-kontext/id1783571053" // Replace with your Apple Podcasts link
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Subscribe on Apple Podcasts"
                    >
                      <SiApplepodcasts />
                    </a>
                    <a
                      href="https://anchor.fm/s/f76f7a14/podcast/rss" // Replace with your RSS feed link
                      target="_blank"
                      rel="noopener noreferrer"
                      title="RSS Feed"
                    >
                      <FaRss />
                    </a>
                  </div>
                </h2>
              </Row>
              <Row>
                <Col className={blogDateTime}>
                  <BiCalendar /> {moment(node.isoDate).format("DD. MMMM YYYY")}{" "}
                  &bull; <BiTime /> {node.itunes.duration}
                </Col>
              </Row>
              <Row>
                <div
                  className={podcastDescription}
                  dangerouslySetInnerHTML={{ __html: node.content }}
                ></div>
              </Row>
              <Row className={podcastAudio}>
                {audioURL && (
                  <audio controls>
                    <source src={audioURL} type={node.enclosure?.type} />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </Row>
            </div>
            {index < data.allFeedPodcastEpisodes.edges.length - 1 && (
              <div className={podcastSeparator}></div>
            )}
          </div>
        );
      })}
    </Layout>
  );
};

export default PodcastPage;
