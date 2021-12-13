import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Permits from './components/Permits';
import Permissons from './components/Permissons';
import CardDash from './components/dashboard/cardDash';
import OneInformation from './components/dashboard/OneInformation';
import Main from './components/main/Main';
import Alert from './components/Alert'
import NomMach from './components/NoMach'
import Notifacations from './components/Notifacations';
import Organ from './components/Organ';
import Register from './components/Register';
const App = () => {
	return <div className="App">

	
	 <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/cardDash" element={<CardDash />} />
		<Route path="/OneInformation/:name" element={<OneInformation />}></Route>
		<Route path="/permits" element={<Permits/>} ></Route>
		<Route path="/permissons" element={<Permissons/>} />
		<Route path="/alert" element={<Alert/>} />
		<Route path="/notifacations" element={<Notifacations/>} />
<Route path="/organ" element={<Organ/>} />


		<Route path="*" element={<NomMach replace to="/404" />} />
		<Route path="/Register" element={<Register/>} />
       
      </Routes>



	</div>;



};

export default App;

//هذا حل يوتيوب من اسد

// import "./app.css";
// import axios from "axios";
// import { useState } from "react";
// import jwt_decode from "jwt-decode";

// function App() {
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const refreshToken = async () => {
//     try {
//       const res = await axios.post("/refresh", { token: user.refreshToken });
//       setUser({
//         ...user,
//         accessToken: res.data.accessToken,
//         refreshToken: res.data.refreshToken,
//       });
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const axiosJWT = axios.create()

//   axiosJWT.interceptors.request.use(
//     async (config) => {
//       let currentDate = new Date();
//       const decodedToken = jwt_decode(user.accessToken);
//       if (decodedToken.exp * 1000 < currentDate.getTime()) {
//         const data = await refreshToken();
//         config.headers["authorization"] = "Bearer " + data.accessToken;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/login", { username, password });
//       setUser(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     setSuccess(false);
//     setError(false);
//     try {
//       await axiosJWT.delete("/users/" + id, {
//         headers: { authorization: "Bearer " + user.accessToken },
//       });
//       setSuccess(true);
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="container">
//       {user ? (
//         <div className="home">
//           <span>
//             Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b> dashboard{" "}
//             <b>{user.username}</b>.
//           </span>
//           <span>Delete Users:</span>
//           <button className="deleteButton" onClick={() => handleDelete(1)}>
//             Delete John
//           </button>
//           <button className="deleteButton" onClick={() => handleDelete(2)}>
//             Delete Jane
//           </button>
//           {error && (
//             <span className="error">
//               You are not allowed to delete this user!
//             </span>
//           )}
//           {success && (
//             <span className="success">
//               User has been deleted successfully...
//             </span>
//           )}
//         </div>
//       ) : (
//         <div className="login">
//           <form onSubmit={handleSubmit}>
//             <span className="formTitle">Lama Login</span>
//             <input
//               type="text"
//               placeholder="username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit" className="submitButton">
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
  