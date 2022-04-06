import React from "react";

const Follower = ({ image, html_url, name }) => {
  return (
    <article className="request-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
