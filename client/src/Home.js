import React from "react";
import PDFViewer from './PDFViewer'
import LinkedIn from './linkedin.png'
import Mojo from './mojocollage.jpeg'

export default function Home() {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/resume_file').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Steven_Wang_Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className="home" style={{marginTop:'40px', marginRight:'100px'}}>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <div style={{marginRight: '25px'}}>
          <h4>About Me</h4>
          <p>I am a mechanical engineer with 25+ years of experience delivering successful projects and products in a wide range of .</p>
          <p>I have extensive experience working as both an engineer and a manager. Above all I am a creative problem solver who is passionate about creating elegant solutions to the most complex and challenging problems.</p>
          <p>Currently I work at Mojo Vision, leading a team of talented engineers in developing innovative automatic machines and tooling for assembling the world's first AR/VR smart contact lens.</p>
        </div>
      <div>
         <img src={Mojo} style={{width:'250px'}}/>
      </div>
    </div>
    <div style={{marginTop:'40px'}}>
    <h4>Skills</h4>
    <ul>
    <li>PTC CREO (Pro/E), SolidWorks, Nx10.0, AutoCAD, FEA, PDM etc.</li>
    <li>ZEMAX, Optics and RayTrace analysis</li>
    <li>BOM/ECO, FMEA, and QA</li>
    <li>AMSE 14.5M-1994/ISO, GD&T, Tolerance Stack Ups</li>
    <li>Automation/Robotic/Sensors/Electronics</li>
    <li>DOE, Product test plan/procedure and report</li>
    <li>Working with domestic and overseas manufacturers.</li>
    <li>Machine Shop and CNC, 3D Print and Quick Prototype</li>
    </ul>
    </div>
	  <div style={{marginTop:'40px'}}>
        <h4>Contact Details</h4>
        <p>Phone: (408) 320-7975</p>
        <p>Email: stevenking0968@gmail.com</p>
        <div style={{display:'flex', justifyContent:'space-between', width: '200px'}}>
          <div>
            <a href="https://www.linkedin.com/in/steven-wang-970b689/">
              <img style={{height:'25px'}} src={LinkedIn}/>   
            </a>
          </div>
          <div style={{marginLeft:'10px'}}>
            <button onClick={onButtonClick}>Download Resume</button>
          </div>
        </div>
       </div>
    </div>
  );
}
