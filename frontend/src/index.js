import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';



// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
	<Router>
		<App />
	</Router>,
  document.getElementById("root")
);





// );
// const DarkModeToggle = () => {
// 	const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);
// 	useEffect(() => {
// 	  document
// 	  .getElementsByTagName("HTML")[0]
// 	  .setAttribute("data-theme", localStorage.getItem("theme"));
// 	},[]);
  