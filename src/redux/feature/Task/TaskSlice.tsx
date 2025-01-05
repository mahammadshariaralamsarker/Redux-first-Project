import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task:{
    id:"adhgaghf",
    title:"Initialize Front-End",
    descripton:"Create home page for and routing ",
    dueDate:"2025-22",
    inCompleted:false,
    priority:"High"
  }
}
 dsaf
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers:{}
})
export default taskSlice.reducer