import React from "react";
import User from "./UserImage";
import styles from "../components/Feed.module.css";
import "../App.css";

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.top_navigation}>
        <a href="#" className={styles.navigation}>
          <span className={styles.name_span}>For you</span>
        </a>
        <a href="#" className={styles.navigation}>
          <span className={styles.name_span}>Following</span>
        </a>
        <div className={styles.setting_box}>
          <a className={styles.a} href="#">
            <span
              className={`material-symbols-outlined ${styles.setting_icon}`}
            >
              settings
            </span>
          </a>
        </div>
      </div>
      <div className={styles.post_section}>
        <div className={styles.user_input}>
          <User />
          <input
            className={styles.form_control}
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        <div className={styles.user_actions}>
          <div className={styles.icon_box}>
            <a
              title="Media"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              imagesmode
            </a>
            <a
              title="Gif"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              gif_box
            </a>
            <a
              title="Poll"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              ballot
            </a>
            <a
              title="Emoji"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              sentiment_satisfied
            </a>
            <a
              title="Schedule"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              calendar_clock
            </a>
            <a
              title="Tag Location"
              href="#"
              className={`material-symbols-outlined ${styles.action_icon} ${styles.tooltip}`}
            >
              location_on
            </a>
          </div>

          <button type="button" className="btn btn-xs" disabled>
            Post
          </button>
        </div>
      </div>
      <div className="content_box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.unsplash.com/photo-1706516605121-532e6aa1dca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661328099204-7a4bc9b8c568?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.pexels.com/photos/19711652/pexels-photo-19711652/free-photo-of-aerial-view-of-forest-and-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 m-auto my-5">
              <div className="card w-100">
                <img
                  src="https://images.pexels.com/photos/18696928/pexels-photo-18696928/free-photo-of-river-and-waterfall-with-green-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
