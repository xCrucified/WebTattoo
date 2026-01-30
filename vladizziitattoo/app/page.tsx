import Image from "next/image";
import { Button } from "./components/ui/button";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <Image
        src="/file.svg"
        alt="Vladizzi Tattoo Logo"
        width={400}
        height={300}
        className="animate-spin-slow"
      />
      <Button className="ml-8">Book Now</Button>
    </div>
  );
}
