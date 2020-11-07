import { createSlice } from '@reduxjs/toolkit'

export const initialState = [
  {
    id: "1",
    first_name: "Lavina",
    last_name: "Bode",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    email: "lbode@company.ca"
  },
  {
    id: "2",
    first_name: "Gerardo",
    last_name: "McCullough",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    email: "lbode@company.ca"
  },
  {
    id: "3",
    first_name: "Paula",
    last_name: "Grimes",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager of Really long names",
    phone: "590-886-4164",
    email: "lbode@company.ca"
  },
  {
    id: "4",
    first_name: "Lavina",
    last_name: "Bode",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "",
    phone: "417-324-6722",
    email: "lbode@company.ca"
  },
  {
    id: "5",
    first_name: "Gerardo",
    last_name: "McCullough",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "",
    email: "lbode@company.ca"
  },
  {
    id: "6",
    first_name: "Paula",
    last_name: "Grimes",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager",
    phone: "590-886-4164",
    email: ""
  },
  {
    id: "7",
    first_name: "Lavina",
    last_name: "Bode",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Tianna.jpg",
    position: "Lead Division Developer",
    phone: "417-324-6722",
    email: "lbode@company.ca"
  },
  {
    id: "8",
    first_name: "Gerardo",
    last_name: "McCullough",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Kevin.jpg",
    position: "Chief Group Coordinator",
    phone: "686-329-4200",
    email: "lbode@company.ca"
  },
  {
    id: "9",
    first_name: "Paula",
    last_name: "Grimes",
    photo: "https://raw.githubusercontent.com/mathiusjohnson/employees/master/public/images/Madison.jpg",
    position: "Global Communications Manager of Really long names",
    phone: "590-886-4164",
    email: "lbode@company.ca"
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer