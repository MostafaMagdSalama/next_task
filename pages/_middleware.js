import { getSession } from "next-auth/react";

// import { useSession, signIn, signOut } from "next-auth/react";
export default async (req) => {
  const session = await getSession();
  if (req.url === "http://localhost:3000/" && !session) {
    console.log("wooooooooooooooooooooooooooorkeeeeeed");
    console.log(session);
  }
  //   const session = useSession();
  //   console.log(session);
};
