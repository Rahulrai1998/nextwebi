import React from "react";
import Title from "../../components/Title";
import styled from "styled-components";
import { blogData } from "./blogData";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <ParentContainer>
      <Title style={{ padding: "2rem 4rem" }}>Related Blogs</Title>
      <BlogContainer className="blog-container">
        {blogData?.map((blog) => (
          <BlogCard className="card" key={blog?.id} {...blog} />
        ))}
      </BlogContainer>
    </ParentContainer>
  );
};

export default Blogs;

const ParentContainer = styled.div`
  position: relative;
  font-family: Lato;

  background-color: rgba(26, 26, 26, 1);
  color: #ffffff;
`;

const BlogContainer = styled.div`
  display: flex;
  background-color: rgba(18, 18, 18, 1);
  gap: 10px;
  position: relative;
  justify-content: center;
`;
