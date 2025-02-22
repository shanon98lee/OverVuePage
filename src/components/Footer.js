import React from "react";
import DeveloperCard from "./styled/DeveloperCard";
import deanfchung from "../assets/dev-pics/dean-chung.png";
import deano from "../assets/dev-pics/deano.jpg";
import drew from "../assets/dev-pics/drew.jpg";
import joseph from "../assets/dev-pics/joseph.jpg";
import alex from "../assets/dev-pics/alex.PNG";
import joju from "../assets/dev-pics/joju.jpg";
import keriann from "../assets/dev-pics/keri_overvue.png"
import allison from "../assets/dev-pics/allison1.jpg"
import faraz from "../assets/dev-pics/FarazPic.png"
import sean from "../assets/dev-pics/SeanPic.png"
import nicholas from "../assets/dev-pics/NicholasPic.jpeg"
import terry from "../assets/dev-pics/TerryPic.jpg"
import alexlu from "../assets/dev-pics/alexlu.jpg"
import jeffrey from "../assets/dev-pics/jeffrey.jpeg"
import kenny from "../assets/dev-pics/kenny.jpg"
import bender from "../assets/dev-pics/bender.jpeg"
import sonny from "../assets/dev-pics/sonny.jpg"
import ross from "../assets/dev-pics/ross.jpg"
import gabby from "../assets/dev-pics/gabby.jpg"
import shanon from "../assets/dev-pics/shanon.jpeg"
import zoew from "../assets/dev-pics/zoew.png"
import { Contribute } from "./Contribute";

// functionality for loading developer cards components, and the contribute components 
export const Footer = () => {
  return (
    <div className="footer">
      <h3 className="team-heading">Meet the team.</h3>
      <div className ="devCards">
        <DeveloperCard>
          <img src={deano} alt = "deano" className="dev-pic" />
          <p className="dev-name">Dean Ohashi</p>
          <a href="https://github.com/dnohashi">@dnohashi</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={deanfchung} alt= "deanf" className="dev-pic" />
          <p className="dev-name">Dean Chung</p>
          <a href="https://github.com/deanfchung">@deanfchung</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={drew} alt = "drew" className="dev-pic" />
          <p className="dev-name">Drew Nguyen</p>
          <a href="https://github.com/drewngyen">@drewngyen</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={joseph} alt = "joseph" className="dev-pic" />
          <p className="dev-name">Joseph Eisele</p>
          <a href="https://github.com/jeisele2">@jeisele</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={alex} alt = "alex" className="dev-pic" />
          <p className="dev-name">Alexander Havas</p>
          <a href="https://github.com/LOLDragoon">@LOLDragoon</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={keriann} alt = "keriann" className="dev-pic" />
          <p className="dev-name">Keriann Lin</p>
          <a href="https://github.com/keliphan">@keliphan</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={joju} alt = "joju" className="dev-pic" />
          <p className="dev-name">Joju Olaode</p>
          <a href="https://github.com/JojuOlaode">@JojuOlaode</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={allison} alt = "allison" className="dev-pic" />
          <p className="dev-name">Allison Pratt</p>
          <a href="https://github.com/allisons11">@allisons11</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={faraz} alt = "faraz" className="dev-pic" />
          <p className="dev-name">Faraz Moallemi</p>
          <a href="https://github.com/farazmoallemi">@farazmoallemi</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={sean} alt = "sean" className="dev-pic" />
          <p className="dev-name">Sean Grace</p>
          <a href="https://github.com/ziggrace">@ziggrace</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={terry} alt = "terry" className="dev-pic" />
          <p className="dev-name">Terry L. Tilley</p>
          <a href="https://github.com/codeByCandlelight">@codeByCandlelight</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={nicholas} alt = "nicholas" className="dev-pic" />
          <p className="dev-name">Nicholas Schillaci</p>
          <a href="https://github.com/Schillaci767">@Schillaci767</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={alexlu} alt = "alexlu" className="dev-pic" />
          <p className="dev-name">Alex Lu</p>
          <a href="https://github.com/aleckslu">@aleckslu</a>
        </DeveloperCard><DeveloperCard>
          <img src={jeffrey} alt = "jeffrey" className="dev-pic" />
          <p className="dev-name">Jeffrey Sul</p>
          <a href="https://github.com/jeffreysul">@jeffreysul</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={kenny} alt = "kenny" className="dev-pic" />
          <p className="dev-name">Kenneth Lee</p>
          <a href="https://github.com/kennyea">@kennyea</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={bender} alt = "bender" className="dev-pic" />
          <p className="dev-name">Ryan Bender</p>
          <a href="https://github.com/rdbender">@rdbender</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={sonny} alt = "sonny" className="dev-pic" />
          <p className="dev-name">Sonny Nguyen</p>
          <a href="https://github.com/sn163">@sn163</a>
        </DeveloperCard>

        <DeveloperCard>
          <img src={shanon} alt = "shanon" className="dev-pic" />
          <p className="dev-name">Shanon Lee</p>
          <a href="https://github.com/shanon98lee">@shanon98lee</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={ross} alt = "ross" className="dev-pic" />
          <p className="dev-name">Ross Lamerson</p>
          <a href="https://github.com/lamerson28">@lamerson28</a>
        </DeveloperCard>
        <DeveloperCard>
          <img src={gabby} alt = "gabby" className="dev-pic" />
          <p className="dev-name">Gabriella Kokhabi</p>
          <a href="https://github.com/gkokhabi">@gkokhabi</a>
        </DeveloperCard>

        <DeveloperCard>
          <img src={zoew} alt = "zoew" className="dev-pic" />
          <p className="dev-name">Zoew McGrath</p>
          <a href="https://github.com/Z-McGrath">@Z-McGrath</a>
        </DeveloperCard>
      </div>
      <Contribute/>
    </div>
  );
};
