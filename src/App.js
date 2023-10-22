import "./App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "./contractDetails/contract";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Vote from './pages/Vote';
// import NavBar from './components/NavBar';
import Profile from "./pages/Profile";
// import ContactUs from './pages/ContactUs';
import LoginPage from "./pages/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import Vote from "./pages/Vote";
import ContactForm from "./pages/ContactUs";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState("");
  const [CanVote, setCanVote] = useState(false);

  useEffect(() => {
    getCandidates();
    getRemainingTime();
    getCurrentStatus();
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  });

  async function vote() {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);
    // const signer = provider.getSigner();
    // console.log(signer)
    // const contractInstance = new ethers.Contract(
    //   contractAddress,
    //   contractAbi,
    //   signer
    // );
    // console.log(number);
    // const tx = await contractInstance.vote(number);
    // console.log("tx", tx);
    // await tx.wait();

    // canVote();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log(signer);

      const contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );

      // Ensure that 'number' is properly defined before using it.
      console.log("Number", number);

      const tx = await contractInstance.vote(number);
      console.log("Transaction Hash:", tx.hash);

      // Wait for the transaction to be mined and confirmed.
      await tx.wait();

      console.log("Transaction confirmed!");
      canVote();
    } catch (error) {
      console.error("Error:", error);
      // Handle the error appropriately, e.g., show a user-friendly message.
    }
  }

  async function canVote() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const voteStatus = await contractInstance.voters(await signer.getAddress());
    console.log("VoteStatus", voteStatus);
    setCanVote(voteStatus);
  }

  async function getCandidates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const candidatesList = await contractInstance.getDataOfCandidate();
    const formattedCandidates = candidatesList.map((candidate, index) => {
      return {
        index: index,
        name: candidate.name,
        voteCount: candidate.voteCount.toNumber(),
      };
    });
    setCandidates(formattedCandidates);
  }

  async function getCurrentStatus() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const status = await contractInstance.getVotingStatus();
    setVotingStatus(status);
  }

  async function getRemainingTime() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const time = await contractInstance.getRemainingTime();
    setremainingTime(parseInt(time, 16));
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      canVote();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        window.localStorage.setItem("auth", true);
        window.localStorage.setItem("address", address);
        canVote();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }

  async function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function logOut() {
    window.localStorage.removeItem("auth");
    window.localStorage.removeItem("address");
  }

  return (
    <>
      <div className="App">
        {localStorage.getItem("auth") ? (
          <div>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Vote
                      account={localStorage.getItem("address")}
                      candidates={candidates}
                      remainingTime={remainingTime}
                      number={number}
                      handleNumberChange={handleNumberChange}
                      voteFunction={vote}
                      showButton={CanVote}
                      logOut={logOut}
                    />
                  }
                />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/knowMore" element={<Profile />} />
              </Routes>
            </Router>
          </div>
        ) : (
          <LoginPage connectWallet={connectToMetamask} />
        )}

      </div>
    </>
  );
}

export default App;
