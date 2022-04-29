import React from 'react'
import ScriptTag from 'react-script-tag';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import am4themes from "@amcharts/amcharts4/themes"

// import * as am4themes from "@amcharts/amcharts4/themes";

// import "../../public/file"


function Map() {

  

//  React.useEffect(() => {
//   const script = document.createElement('script');
//   script.src = "../../public/file";
//   script.async = true;
//   document.body.appendChild(script);
// return () => {
//     document.body.removeChild(script);
//   }
// }, []);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
              <script src="../../public/file.js" type="text/babel" />
           
              
        </Helmet>
      <div>
       
      </div>
      <div id="chartdiv" />
    </div>

    </HelmetProvider>
    
  )
}

export default Map
