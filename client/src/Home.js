import React from "react";
import PDFViewer from './PDFViewer'
import LinkedIn from './linkedin.png'

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
    <div className="home">
      <div style={{marginTop:'30px'}}>
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
	  <div style={{marginTop:'30px'}}>
      <h4>About Me</h4>
      <p>I am a mechanical engineer with decades of experience. Check out my background and projects below.</p>
      <PDFViewer fileUrl={"/presentation"} />
      </div>
    </div>
  );
}
