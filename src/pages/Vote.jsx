import Table from "react-bootstrap/Table";
import React from "react";
import "../css/vote.css";
import NavBar from "../components/NavBar";

function Vote(props) {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column align-items-center justify-content-center mt-3">
        <div className="d-flex flex-column align-items-center justify-content-center contain">
          <div className="">
            <div className="content">
              <h2>You are Connected to MetaMask</h2>
              <p>Metamask Account : {props.account}</p>
              <p>Remaining Time : {props.remainingTime}</p>
            </div>

            <div className="vote-div d-flex flex-row justify-content-center">
              {props.showButton ? (
                <h3 className="text-success">You have already voted</h3>
              ) : (
                <>
                  <div className="p-2">
                    <input
                      type="number"
                      placeholder="Entern Candidate Index"
                      value={props.number}
                      onChange={props.handleNumberChange}
                    ></input>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={props.voteFunction}
                      style={{
                        background: "rgb(118,100,194)",
                        background:
                          "radial-gradient(circle, rgba(118,100,194,1) 0%, rgba(0,63,138,1) 100%)",
                      }}
                      className="btn text-white"
                    >
                      Vote
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div style={{ width: "70%", marginTop: "3em" }}>
            <Table striped className="">
              <thead style={{}}>
                <tr>
                  <th>Index</th>
                  <th>Candidate Name</th>
                  <th>Vote Count</th>
                </tr>
              </thead>
              <tbody>
                {props.candidates.map((candidate, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{candidate.name}</td>
                      <td>{candidate.voteCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <button onClick={props.logOut} className="btn btn-danger">
            LogOut
          </button>
        </div>
      </div>
    </>
  );
}

export default Vote;
