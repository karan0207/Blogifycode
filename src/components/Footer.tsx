import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { GiFeather } from "react-icons/gi";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("setting");

  return (
    <footer className="flex flex-col items-center justify-between   px-1 py-1 md:flex-row h-fit sm:h-[30vh]">
    
      <div className="flex flex-col sm:flex-row w-full h-full border justify-between p-4 items-center border-slate-600">
        <div className=" flex flex-col justify-center sm:ml-6  mb-16 sm:mb-0">
          {/* <Link href={"/"}> */}
            {/* <WordMark /> */}
          {/* </Link> */}
          <div className="flex items-center ">
          <GiFeather />
        <span className='font-mono text-2xl italic ml-0'>
        Blogify 
        </span>
          </div>
          <p className="text-md text-gray-600">Ship your Blog website 10x faster</p>
          <p className="text-md text-gray-600">Copyright © 2024 - All rights reserved</p>
        </div>



        <div className="flex sm:mr-4 w-[60%] sm:w-[40%] justify-center items-center">


        <div className=" flex flex-col justify-center mr-8"> 
          <h1 className="text-lg text-white-50 font-light">Links</h1>
          <ul>
            <Link href={'/'}><li className="text-md text-gray-600 hover:text-gray-500">Pricing</li></Link>
            <Link href={'/'}><li className="text-md text-gray-600 hover:text-gray-500">Documentation</li></Link>
            
          </ul>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="text-lg text-white-50 font-light">Legal</h1>
          <ul>
            <Link href={'/Tos'}><li className="text-md text-gray-600 hover:text-gray-500">Terms of Services</li></Link>
            <Link href={'/privacy'}><li className="text-md text-gray-600 hover:text-gray-500">Privacy Policy</li></Link>
            
          </ul>
        </div>
        </div>
        
      </div>
    </footer>
  );
}
