import { createSlice } from "@reduxjs/toolkit";
import { DATA } from '../data/associations';
import _ from "lodash";


const initialState = {
  associations: [],
  association: null,
  communes: [],
  communeSelect: "",
};

const associationSlice = createSlice({
  name: "association",
  initialState,
  reducers: {
    setAssociations: (state, action) => {
        state.associations = action.payload
    },
    setAssociation: (state, action) => {
      state.association = action.payload
    },
    setCommunes: (state, action) => {
      state.communes = action.payload
  },
  setCommuneSelect: (state, action) => {
    state.communeSelect = action.payload
},
  
  }
});

export const { setAssociations, setAssociation, setCommunes, setCommuneSelect } = associationSlice.actions;
export default associationSlice.reducer;

export const getAssociations = () => async (dispatch) => {
const associations = _.map(DATA, (dt, i) => _.extend({id: i+1}, dt));
  dispatch(setAssociations(associations));
}

export const getCommunesUniques = () => async (dispatch) => {
  let communesSet = new Set();
  DATA.forEach(item => {
    if (item?.commune) {
      communesSet?.add(item?.commune);
    }
  });
  let communesUniques = Array.from(communesSet)
  dispatch(setCommunes(communesUniques));
}

export const getAssociation = (associations, id) => async (dispatch) => {
  let association = await associations?.find(dt => dt?.id == id);
  dispatch(setAssociation(association));
}
