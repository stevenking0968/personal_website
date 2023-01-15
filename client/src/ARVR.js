import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import AttachmentProcess from "./attachmentprocess.png";
import AttachmentRequirements from "./attachmentrequirements.png"
import LensDetail from "./lensdetail.jpeg"
import LensView from "./lensview.jpeg"
import CuringStation from "./curingstation.jpeg"

export default function ARVR() {
	  return (
	    <div className="arvr" style={{marginTop:'60px'}}>
	      <h4>Smart Contact Lens</h4>
	      <div style={{marginBottom:'60px'}}>
	      	<img src={LensDetail} style={{width:'300px'}}/>
	      	<img src={LensView} style={{width:'300px'}}/>
	      	<p>My work was featured in a 2022 <a href="https://www.forbes.com/sites/johnkoetsier/2022/05/18/mojo-visions-smart-contact-lens-ready-for-real-world-testing/?sh=453ca6402edf">Forbes article</a>.</p>
	      	<p>I designed and built completely new machinery to assemble and manufacture the Smart Contact Lens shown above. I will describe these machines in detail below:</p>
	      	<br/>
	      	<p><b>Flex PCB Closure Station</b></p>
	      	<p>I invented a Flex PCB Close machine that bends the flat PCB into the appropriate cone shape so that it can be inserted into the lens.</p>
	      	<img src={PCBCone} style={{width:'700px'}}/>
	      	<div style={{width:'700px'}}>
		      	<YoutubeEmbed embedId="Cyb59y9Lj38" />
	      	  </div>
	      </div>
	      <div style={{marginBottom:'60px'}}>
	      	 <p><b>Lens Assembly Station</b></p>
	      	 <p>This machine performs contact lens assembly.</p>
	      	<div style={{width:'700px'}}>
	      	<YoutubeEmbed embedId="me-j6clnkW0" />
	      	</div>
	      </div>
	      <div style={{marginBottom:'60px'}}>
	      <p><b>Lens Attachment Station</b></p>
	      <p>I invented this machine which attaches two parts with different materials through hermatic sealing to keep out moisture.</p>
	      	<img src={AttachmentRequirements} style={{width:'700px'}}/>
	      	<img src={AttachmentProcess} style={{width:'700px'}}/>
	      	<div style={{width:'700px'}}>
	      	<YoutubeEmbed embedId="eE_HU60BYpE" />
	      	</div>
	      </div>
	      <div style={{marginBottom:'60px'}}>
	      <p><b>Lens Curing Station</b></p>
	      <p>I developed a high pressure chamber that prepares the gel material used to create the lens. 
	      This chamber subjects the gel to pressures of 500 psi and cures it with UV light of 3 wavelengths. The chamber includes a rotation mechanism to ensure the gel to ensure that all of it is evenly exposed to UV light.</p>
	      	<img src={CuringStation} style={{width:'300px'}}/>
	      </div>
	    </div>
	  );
}