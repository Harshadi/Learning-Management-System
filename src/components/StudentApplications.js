import React, { useContext, useState, useEffect, useRef } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Add, Details } from "@material-ui/icons";
import References from "./References";
import "./style.css";
import Logo from "../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const StudentApplications = (props) => {
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	const [id, setId] = useState("");
	const [details, setDetails] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const inputEl = useRef("");
	const [doc, setDoc]= useState([])

	useEffect(() => {
		const details = [];
		firebaseConfig
			.firestore()
			.collection("counselor")
			.doc(currentUser.uid)
			.collection("studentDetails")
			.doc(props.location.state.detail)
			.collection("studentApplications")
			.get()
			.then((snapshot) => {
				snapshot.docs.forEach((detail) => {
					let currentID = detail.id;
					let appObj = { ...detail.data(), ["id"]: currentID };
					details.push(appObj);

					//    details.push(detail.data());
				});
				setDetails(details);
				console.log(details);
			});


firebaseConfig
			.firestore()
			.collection("counselor")
			.doc(currentUser.uid)
			.collection("studentDetails")
			.doc(props.location.state.detail)
.get()
.then((snapshot)=>{
setDoc(snapshot.data())
})



	}, []);

	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	const getSearchTerm = () => {
		setSearchTerm(inputEl.current.value);
		if (searchTerm !== "") {
			const newStudentList = details.filter((detail) => {
				return Object.values(detail)
					.join(" ")
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setSearchResults(newStudentList);
		} else {
			setSearchResults(details);
		}
	};

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<a href="/dashboard">
								<img src={Logo} alt="logo" width="100" className="logo" />
							</a>
							<Nav.Link href="/references" className="signoutBtn">
								References
							</Nav.Link>
							<Nav.Link
								onClick={() => firebaseConfig.auth().signOut()}
								className="signoutBtn"
							>
								SignOut
							</Nav.Link>

							<Nav.Link href="/applications" className="signoutBtn">
								Applications
							</Nav.Link>
							<Nav.Link href="/applicants" className="signoutBtn">
								Applicants
							</Nav.Link>

							<Nav.Link href="/dashboard" className="signoutBtn">
								Dashboard
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<hr />

			<br />
			<br />
			<br />
			<br />
			<h2 className="studentDetailsSection">Student Applications :</h2>

			<div style={{ textAlign: "center" }}>
				<h4>
					{" "}
					<a
						onClick={(event) =>
							history.push({
								pathname: "/addstudentapplicationuniversity",
								detail: props.location.state.detail,
								state: { detail: props.location.state.detail },
							})
						}
					>
						Create Applications
					</a>
				</h4>
				<a
					onClick={(event) =>
						history.push({
							pathname: "/addstudentapplicationuniversity",
							detail: props.location.state.detail,
							state: { detail: props.location.state.detail },
						})
					}
				>
					<Add />
				</a>
			</div>

			<br />
			<br />
			<input
				type="text"
				placeholder="search"
				value={searchTerm}
				onChange={getSearchTerm}
				className="searchBar"
				ref={inputEl}
			/>

			{/* Application details with table */}

			<table className="studentTable">
				<tr className="tableRow">
					<th className="headingRow">Student Name</th>

					<th className="headingRow">Citizenship</th>
					<th className="headingRow">Course</th>
					<th className="headingRow">Application Status</th>
				</tr>

				{searchTerm.length < 1
					? details.map((detail) => (
							<tr className="tableRow">
								<td className="headingRow">{detail.candidateName}</td>
								<td className="headingRow">{detail.birthCountry}</td>
								<td className="headingRow"> {detail.programName}</td>
								<td className="headingRow"> {doc.applicationStatus}</td>
							</tr>
					  ))
					: null}
			</table>
		</div>
	);
};

export default StudentApplications;