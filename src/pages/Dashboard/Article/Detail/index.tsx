import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import { RootState } from '@/models/RootState';
import { TNAME } from '@/utils/action';
import * as Model from './model';
import * as Action from './action';

const Category: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const fetching = useSelector((state: RootState) => {
    return !!state.loading.effects[TNAME(Action.ActionTypes.Fetch, Model.NS)];
  });

  const state = useSelector((state: RootState) => {
    return state.category;
  });

  console.log(state);

  useEffect(() => {
    dispatch(Action.fetch());
  }, []);

  return <>Category{fetching}</>;
};

export default Category;
