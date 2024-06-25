import React, { Component } from "react";

const NewsItem = (props) => {
    return (
      <>
        <div className="card my-3" style={{ width: "auto", height: "405px" }}>
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute' ,right: 0}}>
          <span className="badge rounded-pill bg-danger">
            {props.source}
          </span>
          </div>
          <img
            src={props.imageUrl}
            className="card-img-top"
            alt="..."
            height={"161px"}
            width={"286px"}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {props.author ? props.author : "unknown"} on{" "}
                {new Date(props.date).toGMTString()}
              </small>
            </p>
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
