import { useState } from "react";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [num, setNum] = useState(0);
  
  return <Component {...pageProps} {...num} {...setNum}/>
}