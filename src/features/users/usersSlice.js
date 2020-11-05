import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    first_name: "Lavina",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    last_name: "Bode",
    email: "lbode@company.ca"
  },
  {
    id: "2",
    first_name: "Gerardo",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    last_name: "McCullough",
    email: "lbode@company.ca"
  },
  {
    id: "3",
    first_name: "Paula",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager",
    phone: "590-886-4164",
    last_name: "Grimes",
    email: "lbode@company.ca"
  },
  {
    id: "4",
    first_name: "Lavina",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    last_name: "Bode",
    email: "lbode@company.ca"
  },
  {
    id: "5",
    first_name: "Gerardo",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    last_name: "McCullough",
    email: "lbode@company.ca"
  },
  {
    id: "6",
    first_name: "Paula",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager",
    phone: "590-886-4164",
    last_name: "Grimes",
    email: "lbode@company.ca"
  },
  {
    id: "7",
    first_name: "Lavina",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    last_name: "Bode",
    email: "lbode@company.ca"
  },
  {
    id: "8",
    first_name: "Gerardo",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    last_name: "McCullough",
    email: "lbode@company.ca"
  },
  {
    id: "9",
    first_name: "Paula",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager",
    phone: "590-886-4164",
    last_name: "Grimes",
    email: "lbode@company.ca"
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer