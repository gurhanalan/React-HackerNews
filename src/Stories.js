import React from "react";
import moment from "moment";
import { useGlobalContext } from "./context";

const Stories = () => {
    const { isLoading, hits } = useGlobalContext();
    if (isLoading) {
        return <div className="loading"></div>;
    }
    return (
        <section className="stories">
            {hits.map((story) => {
                const {
                    objectID: id,
                    title,
                    url,
                    num_comments,
                    author,
                    points,
                    created_at: date,
                } = story;

                return (
                    <article key={id} className="story">
                        <h4 className="title">{title}</h4>
                        <p className="info">
                            {points} points by <span> {author} | </span>
                            {num_comments} comments
                        </p>
                        <p className="info">
                            Created at{" "}
                            {moment(date).format("MMMM Do, dddd, YYYY")}
                        </p>
                        <div>
                            <a
                                href={url}
                                className="read-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                read more
                            </a>
                            <button className="remove-btn">remove</button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Stories;
