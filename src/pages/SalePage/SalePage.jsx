/////hooks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

////// components
import ClothList from '../../components/SalePage/ClothList/ClothList';
import ClothTypes from '../../components/SalePage/ClothTypes/ClothTypes';

////styles
import './style.scss';

////fns
import { getListBrands, getListCateg } from '../../store/reducers/requestSlice';
import { getListColors, getListSize } from '../../store/reducers/requestSlice';
import SkeletonsMainPage from '../../common/Skeletons/SkeletonsMainPage/SkeletonsMainPage';

const SalePage = () => {
  const dispatch = useDispatch();

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(getListCateg());
    dispatch(getListSize());
    dispatch(getListColors());
    dispatch(getListBrands());
  }, []);

  if (preloader) {
    return <SkeletonsMainPage />;
  }

  return (
    <div className="sale">
      <div className="container">
        <div className="sale__inner">
          <ClothTypes />
          <ClothList />
        </div>
      </div>
    </div>
  );
};

export default SalePage;
