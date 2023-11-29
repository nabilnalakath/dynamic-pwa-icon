"use client";
import Head from "next/head";
import { getAppData } from "../utils/helper";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [dynamicManifest, setDynamicManifest] = useState(null);
  const [name,setName] = useState("site name");
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
     
     
      const response = await fetch('https://mocki.io/v1/8fbe1c94-9397-4b77-8fac-85a446baff6b');
      let manifestData = await response.json();
      
      console.log('manifestData',manifestData[subdomain]);
      setDynamicManifest(manifestData[subdomain]);
     
      
    } catch (error) {
      console.error("Error fetching custom manifest:", error);
    }
  };
  // Fetch app data based on the subdomain

  return (
    <div>
      <Head>
      {dynamicManifest &&
      <> 
        <title>{name}</title>
      
        <link rel="manifest" href={dynamicManifest} />
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
