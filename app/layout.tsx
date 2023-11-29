import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  let subdomain ='client1';
  if (typeof window !== "undefined") {
    subdomain = window?.location.hostname.split(".")[0];
  }
  const response = await fetch('https://mocki.io/v1/be970942-ead8-45de-8723-8f44a3ba411b');
  let manifestData = await response.json();
  
  console.log('manifestData',manifestData[subdomain]);
  let dynamicManifest = manifestData[subdomain];
  return {
    title: 'helloapp',
    manifest:dynamicManifest
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
{/*     
      <link rel="manifest" id="manifest-placeholder" href="./manifest.json"  /> */}
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
