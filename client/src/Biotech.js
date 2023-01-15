import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import AttachmentProcess from "./attachmentprocess.png";
import AttachmentRequirements from "./attachmentrequirements.png"

export default function Biotech() {
	  return (
	    <div className="biotech" style={{marginTop:'30px'}}>
	      <h4>Cell Growth Monitoring Container</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>Based on Corning's requirements, I developed the stacked cell growth monitor container. These containers include 5 miniature electronic microscopes.
	      It can monitor the cell growth process in the nutirtion solution ie takes pictures every 4 hours and send the pictures to a server through WiFi.</p>
	        <div style={{width:'700px'}}>
	      	<YoutubeEmbed embedId="USpgon7ZrLg" />
	      	</div>
	      </div>
	    </div>
	  );
}