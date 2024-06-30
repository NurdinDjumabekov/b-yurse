import React from 'react';
import './style.scss';

const SkeletonsDetailedPage = () => {
  const listRound = Array.from({ length: 20 }, (_, index) => index);
  const listBlock = Array.from({ length: 7 }, (_, index) => index);
  const listCards = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div className="skeletonDetailed">
      <div className="container">
        <div className="skeletonDetailed__inner">
          <div className="menuSkeleton">
            <div>
              <i></i>
              <p></p>
              <p></p>
            </div>
            <div className="menuSkeleton__center"></div>
            <div className="menuSkeleton__right">
              <span></span>
              <i></i>
            </div>
          </div>

          <div className="skeletonSort">
            <div></div>
            <div></div>
            <div></div>
            <main></main>
          </div>

          <div className="mainDetailedSkeleton">
            <section>
              <div>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <main></main>
            </section>

            <header>
              <main></main>
              <p></p>
              <i></i>
              <div>
                {listBlock.map((_, index) => (
                  <b key={index}></b>
                ))}
              </div>
              <i></i>
              <div className="listround">
                {listRound?.map((_, index) => (
                  <span key={index}></span>
                ))}
              </div>
              <span></span>
              <b></b>
              <div className="twoBlock">
                <b></b>
                <b></b>
              </div>
              <footer></footer>
            </header>
          </div>

          <header></header>

          <div className="cardsList moreList">
            {listCards?.map((i) => (
              <div>
                <i></i>
                <b></b>
                <span></span>
              </div>
            ))}
          </div>

          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default SkeletonsDetailedPage;
