import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import moment from "moment";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  videoTitle,
  videoDescription,
  videoThumbnail,
  blogListItem,
  blogDateTime,
  podcastSeparator,
} from "../styles/videos.module.scss";

const formatDescription = (description, videoId) => {
  if (!description) return "";

  // Convert new lines to <br>
  let formattedText = description.replace(/\n/g, "<br/>");

  // Convert URLs into clickable links
  formattedText = formattedText.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
  );

  // Convert timestamps (e.g., 01:23) into YouTube video links
  formattedText = formattedText.replace(
    /(\d{1,2}):(\d{2})/g,
    (match, minutes, seconds) => {
      const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
      return `<a href="https://www.youtube.com/watch?v=${videoId}&t=${totalSeconds}s" target="_blank" rel="noopener noreferrer">${match}</a>`;
    },
  );

  return formattedText;
};

const VideosPage = () => {
  const data = useStaticQuery(graphql`
    query latestVideos {
      allYoutubeVideo(sort: { publishedAt: DESC }, limit: 5) {
        nodes {
          title
          videoId
          publishedAt
          description
          thumbnail {
            url
          }
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "videos" }}>
      <SEO title="My YouTube Videos" />

      {data.allYoutubeVideo.nodes.map((video, index) => (
        <div key={index}>
          <div className={blogListItem} key={index}>
            <Row>
              <h2 className={videoTitle}>
                <a
                  href={`/blog/${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.title}
                </a>
              </h2>
            </Row>
            <Row>
              <Col className={blogDateTime}>
                <BiCalendar />{" "}
                {moment(video.publishedAt).format("DD. MMMM YYYY")}
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <p
                  className={videoDescription}
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(video.description, video.videoId),
                  }}
                ></p>
              </Col>
              <Col md={4} className="justify-content-end">
                {" "}
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.thumbnail.url}
                    alt={video.title}
                    className={videoThumbnail}
                  />
                </a>
              </Col>{" "}
            </Row>
            {index < data.allYoutubeVideo.nodes.length - 1 && (
              <div className={podcastSeparator}></div>
            )}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default VideosPage;
