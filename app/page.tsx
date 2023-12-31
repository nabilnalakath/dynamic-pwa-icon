"use client";
import Head from "next/head";
import { getAppData } from "../utils/helper";
import React, { useEffect, useState } from "react";
import reactManifest from "react-manifest";


export default function Home() {
 
  const [name,setName] = useState('test app');
  let subdomain ='localhost';
  if (typeof window !== "undefined") {
    subdomain = window?.location.hostname.split(".")[0];
  }

  const updateManifest = () => {
    const manifestDetails = {

    "name": "new app",
    "short_name": "new App",
    "start_url": "/",
    "display": "standalone",
    "orientation": "portrait",
    "theme_color": "#000000",
    "background_color": "#ffffff",
    "icons": [
      {
        "src": "https://images.placeholders.dev/?width=200&height=200&text=cc%201%20app&textColor=blue",
        "sizes": "192x192",
        "type": "image/png"
        },
    ],

}

reactManifest.update(manifestDetails, "#manifest-placeholder")
  }



  useEffect(() => {
    // Fetch custom manifest when component mounts
    //fetchCustomManifest();
  //updateManifest
  }, []);

  const fetchCustomManifest = async () => {
    try {
     
      let dynamicManifest;
      const response = await fetch('https://mocki.io/v1/be970942-ead8-45de-8723-8f44a3ba411b');
      let manifestData = await response.json();
      
      console.log('manifestData',manifestData[subdomain]);
      dynamicManifest = manifestData[subdomain];
      setName(dynamicManifest.name)
      reactManifest.update(dynamicManifest, "#manifest-placeholder");
    } catch (error) {
      console.error("Error fetching custom manifest:", error);
    }
  };
  // Fetch app data based on the subdomain

  return (
    <div>
      <Head>
     { name && 
      <> 
        <title>{name}</title>
      
       
        <meta
          name="description"
          content={`${name} - Customized for ${subdomain}`}
        />
        
        <meta name="apple-mobile-web-app-title" content={name} />
        <meta name="application-name" content={name} />
        </>
}
      </Head>
      
      <main>
        <h1>Hello, {name}!</h1>
        {/* Rest of your app */}
      </main>
    </div>
  );
}
