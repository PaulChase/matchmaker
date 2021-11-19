import Home from "./components/Home";
import { useEffect, useState } from "react";
import PickFinest from "./components/pickFinest";

function App() {
	const [view, setView] = useState("home");
	const [gender, setGender] = useState("");
	const changeGender = (daGender) => {
		setGender(daGender);
		setView("choose");
	};

	return <div>{view == "home" ? <Home changeGender={changeGender} /> : <PickFinest gender={gender} />}</div>;
}

export default App;
