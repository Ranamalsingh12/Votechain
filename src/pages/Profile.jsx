import React from "react";
import NavBar from "../components/NavBar";
import "../css/profile.css";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="https://wallpapers.com/images/hd/bjp-kamala-flower-in-round-orange-rr306xng5wxutgar.jpg"
                  alt="BJP"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card-content">
                <h1 className="card-header">Bhartiya Janta Party</h1>
                <p className="card-text">
                  The Bharatiya Janata Party (BJP), often referred to simply as
                  the BJP, is one of the two major political parties in India,
                  the other being the Indian National Congress.The BJP was
                  founded in 1980 and is considered a right-wing political party
                  in India.
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
                <p />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="http://www.pngimagesfree.com/LOGO/C/congress/round-congress-logo-png.png"
                  alt="rome"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card-content">
                <h1 className="card-header">Indian National Congress</h1>
                <p className="card-text">
                  The Congress Party, officially known as the Indian National
                  Congress (INC), is one of the oldest and most prominent
                  political parties in India.Rahul Gandhi present congress over
                  a year firstly Jawaharlal Nehru started congress.
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="https://scontent.fixc2-1.fna.fbcdn.net/v/t1.6435-9/181537486_108270768085348_3758237820451548629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3CoHFnASoisAX97slHn&_nc_ht=scontent.fixc2-1.fna&oh=00_AfAt9lvg43aGm_mUxtrDtP_Qvi6FZBhyl6P7fqmo9ONyRA&oe=6549825F"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card-content">
                <h1 className="card-header">Aam Aadmi Party</h1>
                <p className="card-text">
                  The Aam Aadmi Party (AAP) is a prominent political party in
                  India that was founded in 2012. The name "Aam Aadmi"
                  translates to "common man" in Hindi, reflecting the party's
                  stated commitment. AAP gained prominence in the National
                  Capital Territory of Delhi.
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="https://i.pinimg.com/originals/39/b2/02/39b2023cc16dc16df973c69af61f2b93.jpg"
                  alt="rome"
                  height="350"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card-content">
                <h1 className="card-header">Samajwadi Party</h1>
                <p className="card-text">
                  The Samajwadi Party (SP) is a prominent political party in
                  India, primarily active in the northern state of Uttar
                  Pradesh. Founded in 1992 by Mulayam Singh Yadav, the party has
                  its roots in socialist ideology.The party was formed with the
                  goal of representing the interests of
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bahujan-samaj-party-logo-png-images--thumbnail-1673701310.jpg"
                  alt="rome"
                  height="330"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card-content">
                <h1 className="card-header">Bahujan Samaj Party</h1>
                <p className="card-text">
                  The Bahujan Samaj Party (BSP) is a prominent political party
                  in India, primarily active in the northern state of Uttar
                  Pradesh and some other regions. Founded in 1984 by Kanshi Ram
                  and later led by Mayawati.particularly those from the Yadav
                  community.
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="img">
                <img
                  className="card-img"
                  src="https://m.media-amazon.com/images/I/41999OseRUL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg "
                  alt="rome"
                  height="400"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="card-content">
                <h1 className="card-header">Janata Dal</h1>
                <p className="card-text">
                  Janata Dal, short for "Janata Dal," is a prominent political
                  party in India. The name "Janata Dal" translates to "People's
                  Party" in Hindi. This political party has played a significant
                  role in Indian politics.The merger was an attempt to unite
                  different factions.
                </p>
                <button className="card-btn">
                  Know More<span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
