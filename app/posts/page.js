import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Navbar from "@/components/Navbar";
import { db } from "@/firebase";
import CreatePost from "@/components/CreatePost";

async function Page() {

  const posts = await getDocs(collection(db, "posts"))


  return (
    <div>
      <div>
      <CreatePost />
    </div>

      <ul>
         {posts.docs.map(p => <li>{p.data().posts}</li>)}
      </ul>
     </div>
  );
}

export default Page;

