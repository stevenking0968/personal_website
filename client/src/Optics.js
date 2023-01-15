import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import Tosa from "./tosa.png";
import TosaAssembly from "./tosaassembly.png"

export default function Optics() {
	  return (
	    <div className="molex" style={{marginTop:'30px'}}>
	      <h4>Camera/Optics</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>I also modified an objective mechanical structure and make it meet the design specs and put it into production.</p>
	      <p>I developed a new structure compensation to solve the fix focus camera defocus by thermal problem. Makes the defocus from 25 um reduce to 12 um.</p>
	      <p>I designed a compact structure Yaq laser through modifying the optical mounts pump cavity and optical path. I invented a compact optical mount, which is now patented.</p>
	      <img src={Tosa} style={{width:'700px', marginBottom:'50px'}}/>
	      <img src={TosaAssembly} style={{width:'700px'}}/>
	      </div>
	    </div>
	  );
}