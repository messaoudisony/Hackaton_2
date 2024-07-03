import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import association from './associasion';

export const store = configureStore({
  reducer: {
    association: association,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export function getOutsideStore() {
  return store;
}
