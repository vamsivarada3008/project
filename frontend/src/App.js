// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";

import Login from "./Components/Login";
import { AuthProvider } from "./Components/Auth";
import { useAuth } from "./Components/Auth";
import RequireAuth from "./Components/RequireAuth";
// App Component
const App = () => {
	const auth = useAuth();
	const handleLogout = () => {
		auth.logout();
	}
return (
	<AuthProvider>
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				STUDENT MANAGEMENT SYSTEM (SMS)
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
				
				
					<Nav>
						<Link to={"/login"}
						className="nav-link" onClick={handleLogout}>
							Logout
						</Link>
					</Nav>
				

			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path='/'
					element={<RequireAuth><CreateStudent/></RequireAuth>} />
				<Route path="/create-student"
					element={<RequireAuth><CreateStudent/></RequireAuth>} />
				<Route path='/edit-student/:id'  element={<EditStudent/>} />
				<Route path='/student-list'
					element={<RequireAuth><StudentList/></RequireAuth>} />
				
				<Route path="/login"
					element={<Login/>} />
				
				</Routes>
				
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
	</AuthProvider>
);
};

export default App;
