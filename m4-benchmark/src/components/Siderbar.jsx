import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import  Col from "react-bootstrap/Col"



const Sidebar = () => {
  return(
    <>
    <Container>
      <Row>
        <Col md={2} id="sidemenu">
         <nav className="side">
          <div className="d-flex pr-2" style={{ justifyContent: "center" }}>
            <a href="./homePage.html">
              <img
                className="logo mt-4"
                src=""
                alt="spotify logo"
              />
            </a>
          </div>
          <div className="menu mt-5">
            <ul className="px-0">
              <li className="mt-3 active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={26}
                  height={26}
                  style={{ fill: "white", paddingBottom: 4, marginRight: 8 }}
                >
                  <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" />
                </svg>
                <a href="./homePage.html">Home</a>
              </li>
              <li className="mt-3 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={26}
                  height={26}
                  style={{
                    fill: "white",
                    paddingBottom: 4,
                    opacity: "50%",
                    marginRight: 8
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                  />
                </svg>
                <a href="#" className="text-muted">
                  Search
                </a>
              </li>
              <li className="mt-3">
                <span>
                  <img
                    style={{
                      width: 18,
                      marginRight: 15,
                      opacity: "50%",
                      paddingBottom: 3,
                      marginLeft: 7
                    }}
                    src="./assets/sidemenu/library.png"
                    alt="home"
                  />
                </span>
                <a href="#" className="text-muted">
                  Your Library
                </a>
              </li>
            </ul>
          </div>
          <div
            className="buttons d-flex"
            style={{
              flexDirection: "column",
              justifyContent: "flex-end" /* height: '65%', */,
              alignItems: "center",
              position: "absolute",
              bottom: 100,
              left: 23
            }}
          >
            <button className="sign-up">SIGN UP</button>
            <a href="./login.html">
              {" "}
              <button className="login mt-2">LOGIN</button>
            </a>
            <p>
              <a href="#" className="cookie">
                {" "}
                Cookie
              </a>{" "}
              |
              <a href="#" className="privacy">
                Privacy Policy
              </a>
            </p>
          </div>
        </nav>

      </Col>
    </Row>
  </Container>
    </>
  )
}

export default Sidebar