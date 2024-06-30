import './style.scss';

const SkeletonsMainPage = () => {
  const listRound = Array.from({ length: 20 }, (_, index) => index);
  const listBlock = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="skeletonParent">
      <div className="container">
        <div className="skeletonParent__inner">
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
          <div className="mainInfo">
            <div className="mainInfo__types">
              <div></div>
              <section></section>
              <div></div>
              <div></div>
              <p></p>
              <main>
                {listRound.map((_, index) => (
                  <i key={index}></i>
                ))}
              </main>
              <span></span>
            </div>
            <div className="mainInfo__block">
              <main>
                <p></p>
              </main>
              <div className="cardsList">
                {listBlock?.map((i) => (
                  <div>
                    <i></i>
                    <b></b>
                    <span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skeletonFooter"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonsMainPage;
