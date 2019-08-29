import React, { useRef, useState } from "react";
import arrow from "../image/arrow.png";

const Blog = () => {
  const [classList, setClassList] = useState(["container limited"]);
  const moreFade = useRef(null);

  const unlimited = () => {
    setClassList(["container"]);
    moreFade.current.style.display = "none";
  };
  return (
    <>
      <div className={"section"}>
        <div className={classList}>
          <h2>Blog</h2>
          <div className={"columns is-multiline blog is-centered"}>
            <div className={"column is-5-desktop is-11-tablet"}>
              <h3>Trump Offers Contradictory Signals on China Trade War</h3>
              <p> Read More</p>
            </div>
            <div className={"column is-5-desktop is-11-tablet"}>
              <h3>
                Voluptate elit cupidatat est sint dolore. Fugiat occaecat
                occaecat veniam officia. Veniam duis elit esse laborum nulla
                anim amet ipsum in cupidatat ex eu.
              </h3>
              <p> Read More</p>
            </div>
            <div className={"column is-5-desktop is-11-tablet"}>
              <h3>.</h3>
              <p> Read More</p>
            </div>
            <div className={"column is-5-desktop is-11-tablet"}>
              <h3>
                President Trump shifted tone on his trade war with China yet
                again on Monday, calling President Xi Jinping of China a “great
                leader” just three days after branding him an “enemy” of the
                United States. Mr. Trump said that Chinese officials had reached
                out by telephone and that the two sides would soon restart trade
                talks, after the latest escalation in tariffs and his “order” to
                American companies to look for ways to pull out of China. “We
                were called and we’re going to start very shortly to negotiate,”
                Mr. Trump said as he met with President Abdel Fattah el-Sisi of
                Egypt on the sidelines of the Group of 7 summit meeting in
                Biarritz, France. “We’ll see what happens, but I think we’re
                going to make a deal.” Mr. Trump appeared to be toning down a
                conflict that has battered world financial markets, hours after
                China’s chief negotiator did the same.
              </h3>
              <p> Read More</p>
            </div>
            <div className={"column is-5-desktop is-11-tablet"}>
              <h3>Trump Offers Contradictory Signals on China Trade War</h3>
              <p> Read More</p>
            </div>
          </div>
          <div className={"more-fade"} ref={moreFade}>
            <div className={"more-button"} onClick={() => unlimited()}>
              <img src={arrow} className={"arrow"}></img>
              <span className={"more"}>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
