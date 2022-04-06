import React from "react";
import RequestDetails from "./RequestDetails";

const Follower = ({ image, html_url, name }) => {
  return (
    <article className="request-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <a href="/requestDetails" className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
