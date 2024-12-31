import FormNewPost from "./components/form-new-posts";
import { getCurrentUser } from "./lib/session";


export default async function Home() {
const user = await getCurrentUser();
console.log(user)

  return (
    <main className="w-screen h-screen justify-center items-center bg-neutral-300 flex my-5">
     Hello
    </main>
  );
}
