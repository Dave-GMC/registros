import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    curso: []
};

const cursosSlice = createSlice(
    {
        name: 'datosCursosRedux',
        initialState,
        reducers :{
            setCurso: (state,action)=>{
                state.curso = action.payload;
            }


        }

    }
);

export const {setCurso} = cursosSlice.actions;
export default cursosSlice.reducer;
