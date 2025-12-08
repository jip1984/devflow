import { auth } from "@/auth";
import { Metadata } from "next";
import { signOut } from "@/auth";
import ROUTES from "@/constants/route";

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const page = async () => {

  const session = await auth();

  console.log(session)

  return (

    <div>
      <h1 className='text-3xl text-light-500'>Welcome to the ultimate next js course</h1>
      <form className="px-10 pt-[100px]" action={async () => {
        "use server"
        await signOut({redirectTo: ROUTES.SIGN_IN})
      }}>

      </form>
    </div>
  )
}

export default page