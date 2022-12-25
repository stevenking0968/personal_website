import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Projects() {
	  return (
	    <div className="projects" style={{marginTop:'30px'}}>
	      <h4>Projects</h4>
	      <div>
		      <div style={{marginBottom:'30px'}}>
		      	<YoutubeEmbed embedId="Cyb59y9Lj38" />
		      </div>
		      <div style={{marginBottom:'30px'}}>
		      	<YoutubeEmbed embedId="me-j6clnkW0" />
		      </div>
	      </div>
	      <div>
		      <div style={{marginBottom:'30px'}}>
		      	<YoutubeEmbed embedId="eE_HU60BYpE" />
		      </div>
		      <div style={{marginBottom:'30px'}}>
		      	<YoutubeEmbed embedId="USpgon7ZrLg" />
		      </div>
	      </div>
	    </div>
	  );
}