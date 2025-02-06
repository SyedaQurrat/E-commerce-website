'use client';
import { auth } from "../../../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
// export default function Dashboard() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await auth.signOut();
//     router.push("/login");
//   };

//   return (
//     <div className="min-h-screen bg-[#EEEFFB] flex flex-col items-center justify-center">
//       <h1 className="text-[#7E33E0] text-3xl font-lato">Welcome to Dashboard</h1>
//       <button
//         onClick={handleLogout}
//         className="bg-[#FB2E86] text-white px-4 py-2 rounded mt-4"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }


export default  function Dashboard() {
    return(
        <div className="min-h-screen bg-[#EEEFFB] flex flex-col items-center justify-center">
         <h1 className="text-[#7E33E0] text-3xl font-lato">Welcome to Dashboard</h1>
        <Link href ={"/admin"}> Admin Panel
       </Link>
    </div>

    )
}
