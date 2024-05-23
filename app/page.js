import { divider } from "@nextui-org/react";
import Image from "next/image";
import { readdir } from 'node:fs/promises';

const PATH = '../comics'


export default async function Home() {
  
  return (
   <div className="pt-40 flex items-center justify-center">
    hello world
   
   </div>
  );
}