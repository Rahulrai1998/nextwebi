import React from "react";
import styled from "styled-components";
import pointer from "../../assets/cross-pointer.png";

const BlogCard = ({ id, title, content, image, ...rest }) => {
  return (
    <Card {...rest}>
      <span className="image">
        <img src={image} alt="Blog header image" />
      </span>
      <h4>{title}</h4>
      <p className="content">{content}</p>
      <p style={{ cursor: "pointer" }}>
        Read more{" "}
        <img src={pointer} alt="" style={{ width: "20px", height: "20px" }} />
      </p>
    </Card>
  );
};

export default BlogCard;

const Card = styled.div`
  font-family: Lato;
  display: flex;
  padding: 30px;
  width: 387px;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 44.27%, #141414 100%);
  .content {
    font-size: 1rem;
    margin: 1rem 0;
  }
  h4 {
    font-weight: 700;
    font-style: bold;
    font-size: 22px;
    margin: 1rem 0;
  }
  img {
    border-radius: 10px;
    height: 244px;
    object-fit: cover;
  }
  .image {
    position: relative;
  }

  .image:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, rgba(18, 18, 18, 1), transparent);
    pointer-events: none;
  }

  position: relative;
  & + &:before {
    content: "";
    position: absolute;
    top: 0rem;
    bottom: 1rem;
    left: 0;
    // width: 2px;
    border: 1px solid rgba(38, 38, 38, 1);
  }
`;
