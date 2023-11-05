import React from "react";
import Table from "react-bootstrap/Table";

const Stats = ({ candidates }) => {
  const sybmols = [
    {
      partyName: "BJP",
      logo: "https://wallpapers.com/images/hd/bjp-kamala-flower-in-round-orange-rr306xng5wxutgar.jpg",
    },
    {
      partyName: "Congress",
      logo: "http://www.pngimagesfree.com/LOGO/C/congress/round-congress-logo-png.png",
    },
    {
      partyName: "AAP",
      logo: "https://scontent.fixc2-1.fna.fbcdn.net/v/t1.6435-9/181537486_108270768085348_3758237820451548629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3CoHFnASoisAX97slHn&_nc_ht=scontent.fixc2-1.fna&oh=00_AfAt9lvg43aGm_mUxtrDtP_Qvi6FZBhyl6P7fqmo9ONyRA&oe=6549825F",
    },
    {
      partyName: "AITC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/All_India_Trinamool_Congress_flag.svg",
    },
    {
      partyName: "Samajwadi Party",
      logo: "https://i.pinimg.com/originals/39/b2/02/39b2023cc16dc16df973c69af61f2b93.jpg",
    },
    {
      partyName: "JD",
      logo: "https://www.oneindia.com/img/2017/11/janata-17-1510914885.jpg",
    },
  ];

  const mergedArray = sybmols.map((symbol, index) => {
    const candidate = candidates[index];
    return { ...symbol, ...candidate };
  });

  console.log(mergedArray);

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center contain">
          <div className="content">
            <h2>Live Stats</h2>
          </div>
          <div style={{ width: "70%", marginTop: "3em" }}>
            <Table style={{ padding: "3em" }} striped className="">
              <thead style={{}}>
                <tr>
                  <th>Symbol</th>
                  <th>Party Name</th>
                  <th>Candidate Name</th>
                  <th>Vote Count</th>
                </tr>
              </thead>
              <tbody>
                {mergedArray.map((arr, index) => {
                  return (
                    <tr key={index}>
                      <td className="tdd">
                        <img
                          src={arr.logo}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100px",
                            display: "block",
                            margin: "0 auto",
                            borderRadius: "50%",
                          }}
                        />
                      </td>

                      <td>{arr.partyName}</td>
                      <td>{arr.name}</td>
                      <td>{arr.voteCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          {/* <button onClick={props.logOut} className="btn btn-danger">
            LogOut
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
