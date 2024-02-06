// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../Store';
import cooperatesData from 'src/data/CooporateData';
import { DataProps } from 'src/data/DataProps';


// interface StateType {
//   selectedCooperate: DataProps;
// }

const initialState = {
  selectedCooperate: null,
};

export const CoorporateDataSlice = createSlice({
  name: 'coorporate_data',
  initialState,
  reducers: {
    getCooperate: (state, action) => {
      state.selectedCooperate = action.payload;
    },
  },
});

export const { getCooperate } = CoorporateDataSlice.actions;

export const fetchCooperate  = (pathName: any) => async (dispatch: AppDispatch) => {
  
  try {
    const response: DataProps | undefined = await cooperatesData?.find((item) => item?.name === pathName);
    dispatch(getCooperate(response))   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  } catch (error: any) {
    throw new Error(error);
  }
}

export default CoorporateDataSlice.reducer;
