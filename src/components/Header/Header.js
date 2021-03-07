import { React } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
	return (
		<Navbar
			className="nav"
			collapseOnSelect
			expand="md"
			fixed="top"
			variant="dark"
			style={{ backgroundColor: "black", padding: "5px" }}
		>
			<Container className="header">
				<Navbar.Brand href="/">
					<h1
						style={{
							fontFamily: "Bernhard-scriptC",
							color: "#cab381",
							margin: 0,
						}}
					>
						MonarhWebStudio
					</h1>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					style={{ color: "#cab381" }}
				>
					<Nav className="ml-auto">
						<Nav.Link
							href="/"
							className="ml-auto"
							style={{
								fontFamily: "Bernhard-scriptC",
								color: "#cab381",
								fontSize: "2.5em",
							}}
						>
							Главная
						</Nav.Link>
						<Nav.Link
							href="/about"
							className="ml-auto"
							style={{
								fontFamily: "Bernhard-scriptC",
								color: "#cab381",
								fontSize: "2.5em",
							}}
						>
							О себе
						</Nav.Link>
						<Nav.Link
							href="/portfolio"
							className="ml-auto"
							style={{
								fontFamily: "Bernhard-scriptC",
								color: "#cab381",
								fontSize: "2.5em",
							}}
						>
							Портфолио
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
