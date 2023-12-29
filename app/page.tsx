import Image from "next/image";
import Tasks from "./components/tasks/Tasks";

export default function Home() {
  console.log(`USER_ID: ${process.env.STATIC_USER_ID}`);

  return <Tasks />;
}
