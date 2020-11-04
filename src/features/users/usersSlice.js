import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    first_name: "Ronny",
    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/manigm/128.jpg",
    position: "Lead Usability Officer",
    phone: "354-180-9163",
    last_name: "Langosh"
  },
  {
    id: "2",
    first_name: "Neal",
    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",
    position: "Principal Creative Supervisor",
    phone: "513-412-9588",
    last_name: "Rolfson"
  },
  {
    id: "3",
    first_name: "Lavina",
    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/elliotnolten/128.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    last_name: "Bode"
  },
  {
    id: "4",
    first_name: "Gerardo",
    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/vlajki/128.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    last_name: "McCullough"
  },
  {
    id: "5",
    first_name: "Paula",
    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/mymyboy/128.jpg",
    position: "Global Communications Manager",
    phone: "590-886-4164",
    last_name: "Grimes"
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer