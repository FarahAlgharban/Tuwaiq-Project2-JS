const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    id: 1,
    nationalId: "1010",
    firstName: "Nada",
    lastName:"AlRaghieb",
    password: "994",
    isAdmin: true,
  },
  {
    id:2,
    username: "1012",
    firstName: "Ghada",
    lastName:"AlShamrani",
    password: "112",
    isAdmin: false,
  },
];

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //if everything is ok, create new access token, refresh token and send to user
});

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "5s",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json("Username or password incorrect!");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted.");
  } else {
    res.status(403).json("You are not allowed to delete this user!");
  }
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
});

app.listen(5000, () => console.log("Backend server is running!"));






// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose')
// const fs = require('fs');
// const app = express();
// const {User}=require('./db/models/user')
// const { userRouter } = require('./routers/routes/userRouter');
// const { permissionsRouter } = require("./routers/routes/permissionsRouter");
// main()
// //saveToDB();
// async function main() {
//     try {
//       await mongoose.connect("mongodb://localhost:27017/tawakkalna");
//       console.log("Database connected");
//     } catch (error) {
//       console.log(error);
//     }
//   }
// //routers
// saveUser('1010','994')
// function saveUser (nationalId,  password,  ) {
//     const newUser = new User( {
//     nationalId,
//     password,
//     })
//     newUser.save()
//   }
// //   server.post('/login');
// //built-in middlewares
// app.use(express.json());
// //third-party middleware
// app.use(cors());
// //app routers
// app.use('/user',userRouter )
// app.use("/permissions", permissionsRouter);
// app.use("/permissions", permissionsRouter);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server On ${PORT}`);
// });