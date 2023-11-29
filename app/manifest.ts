import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "app1",
       short_name: "app1",
       start_url: "/",
       display: "standalone",
       orientation: "portrait",
       theme_color: "#000000",
       background_color: "#ffffff",
       icons: [
         {
           "src": "https://images.placeholders.dev/?width=200&height=200&text=cc%201%20app&textColor=yellow",
           "sizes": "192x192",
           "type": "image/png"
           }
       ]
   
   }
}