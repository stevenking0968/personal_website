import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import Tosa from "./tosa.png";
import TosaAssembly from "./tosaassembly.png"

export default function Telecom() {
	  return (
	    <div className="telecom" style={{marginTop:'30px'}}>
	      <h4>Telecommunications</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>I developed a 4 channel 100G transceiver. The 4 channel laser and fiber array pitch is 750 um. I developed an automatic alignment machine through adjusting the silicon lens to align the laser beam into fiber. This machine is fully automated and has entered production.</p>
	      <img src={Tosa} style={{width:'700px', marginBottom:'50px'}}/>
	      <img src={TosaAssembly} style={{width:'700px'}}/>
	      </div>
	    </div>
	  );
}