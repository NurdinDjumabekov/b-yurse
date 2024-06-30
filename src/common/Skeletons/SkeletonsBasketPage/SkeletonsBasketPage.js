import './style.scss';

const SkeletonsBasketPage = () => {
  const listRound = Array.from({ length: 20 }, (_, index) => index);
  const listBlock = Array.from({ length: 4 }, (_, index) => index);
  const listBlockBasket = Array.from({ length: 2 }, (_, index) => index);

  return (
    <div className="skeletonBasket">
      <div className="container">
        <div className="skeletonBasket__inner">
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
          <div className="sortingBasket"></div>
          <div className="skeletonListBasket">
            {listBlockBasket.map((_, index) => (
              <>
                <div key={index}>
                  <div></div>
                  <main>
                    <p></p>
                    <i></i>
                    <span></span>
                    <section></section>
                    <div></div>
                    <b></b>
                  </main>

                  <div className="roundsBlocks">
                    <p></p>
                    <p></p>
                  </div>
                </div>

                <div className="line"></div>
              </>
            ))}
          </div>
          <div className="cardsList listfour">
            {listBlock?.map((i) => (
              <div></div>
            ))}
          </div>
          <div className="skeletonFooter"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonsBasketPage;
