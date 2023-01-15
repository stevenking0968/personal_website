import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import AttachmentProcess from "./attachmentprocess.png";
import AttachmentRequirements from "./attachmentrequirements.png"

export default function ProbeCards() {
	  return (
	    <div className="probecards" style={{marginTop:'30px'}}>
	      <h4>Probe Card Head Lapping Machine</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>I have extensive experience working on probe card manufacturing. One notable project was when I designed and created a completely new probe card head lapping machine.</p>
	      <p>Grinding the probe card head end to the appropriate flatness is a critical step in the probe card manufacturing process. In this case, the flatness requirement of the probe head end is 10 micron and it is very thin and not very rigid. Correctly grinding the probe head end to the appropriate flatness requires very fine tuned control and constant monitoring of the grinding progress. 
	      There was no existing machine that could do this, so I invented an intelligent grinding machine that can precisely control the grinding force and monitor the grinding progress. The unique feature of this machine was that it was capable of intelligently sensing and constantly adjusting the grinding to achieve very fine results.</p>
        	<div style={{width:'700px'}}>
	      	<YoutubeEmbed embedId="USpgon7ZrLg" />
	      	</div>
	      	<p>I have invented torsim and cantilevel mixed probe structure that is patented.</p>
	      <p>I also invented a push/bonding mechanism to solve the probe card LTCC Plate flatness problem that was caused by mass pogo pin. This is now patented.</p>
	      </div>
	    </div>
	  );
}