import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SlUser, SiUserFemale } from "react-icons/sl";
import {
  blogBody,
  studentImage,
  studentIcon,
  studentIconWrapper,
  studentTable,
} from "../styles/wall-of-fame.module.scss";

const WallOfFamePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "wall-of-fame" }, name: { eq: "main" }) {
        childMarkdownRemark {
          frontmatter {
            semesters {
              term
              lectures {
                lecture
                lectureLink
                students {
                  name
                  image {
                    name
                    publicURL
                  }
                  socialLinks {
                    type
                    url
                  }
                }
              }
            }
          }
          html
        }
      }
    }
  `);

  const semesters = data.file.childMarkdownRemark.frontmatter.semesters;

  return (
    <Layout pageInfo={{ pageName: "wall-of-fame" }}>
      <SEO title="drumm.sh | Wall of Fame" />
      <div
        className={blogBody}
        dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
      />
      <div className={studentTable}>
        <div className={blogBody}>
          {semesters.map((semester, index) => (
            <div key={index}>
              <h2>{semester.term}</h2>
              <table>
                <colgroup>
                  <col style={{ width: "400px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>Lecture</th>
                    <th />
                    <th>Student Name</th>
                    <th>Social Media</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.lectures.flatMap((lecture, lectureIdx) =>
                    lecture.students.map((student, studentIdx) => (
                      <tr key={`${lectureIdx}-${studentIdx}`}>
                        {studentIdx === 0 && (
                          <td rowSpan={lecture.students.length}>
                            <a href={lecture.lectureLink}>
                              <strong>{lecture.lecture}</strong>
                            </a>
                          </td>
                        )}
                        <td>
                          {student.image.name != "none" ? (
                            <div>
                              <img
                                src={student.image.publicURL}
                                alt={student.name}
                                className={studentImage}
                              />
                            </div>
                          ) : (
                            <div className={studentIconWrapper}>
                              <SlUser className={studentIcon} />
                            </div>
                          )}
                        </td>
                        <td>{student.name}</td>

                        <td>
                          {student.socialLinks?.length > 0 ? (
                            <h1>
                              {" "}
                              {student.socialLinks.map((link, linkIdx) => (
                                <a
                                  key={linkIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={link.type}
                                >
                                  {link.type === "linkedin" && <FaLinkedin />}
                                  {link.type === "github" && <FaGithub />}
                                </a>
                              ))}
                            </h1>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WallOfFamePage;
