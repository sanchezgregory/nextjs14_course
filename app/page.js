import { divider } from "@nextui-org/react";
import Image from "next/image";
import { readdir } from 'node:fs/promises';

const PATH = '../comics'


export default async function Home({comics}) {

  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json()
  
  return (
   <div className="pt-40 flex items-center justify-center">
    hello world
    {comics && comics.map(item => (
     console.log(item)
    ))}
   </div>
  );
}


Home.getInitialProps = async() => {
  
  console.log("asdasdasd");
    
    return { comics:json }
}