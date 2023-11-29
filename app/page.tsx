"use client";
import Head from "next/head";
import { getAppData } from "../utils/helper";
import React, { useEffect, useState } from "react";
import reactManifest from "react-manifest";


export default function Home() {
 
  const [name,setName] = useState(null);
  let subdomain ='localhost';
  if (typeof window !== "undefined") {
    subdomain = window?.location.hostname.split(".")[0];
  }
  useEffect(() => {
    // Fetch custom manifest when component mounts
    fetchCustomManifest();
  }, []);

  const fetchCustomManifest = async () => {
    try {
     
      let dynamicManifest;
      const response = await fetch('https://mocki.io/v1/8681f059-86ee-404b-ab84-56e8097fea9c');
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
