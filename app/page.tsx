"use client";
import Head from "next/head";
import { getAppData } from "../utils/helper";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [dynamicManifest, setDynamicManifest] = useState(null);
  let subdomain ='localhost';
  if (typeof window !== "undefined") {
    subdomain = window?.location.hostname.split(".")[0];
  }
  const { name, iconUrl } = getAppData(subdomain);
  useEffect(() => {
    // Fetch custom manifest when component mounts
    fetchCustomManifest();
  }, []);

  const fetchCustomManifest = async () => {
    try {
     
     
      const response = await fetch('https://mocki.io/v1/25e12c24-cf13-423f-94e8-dbc70a948c3d');
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
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="icon" href={iconUrl} />
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
