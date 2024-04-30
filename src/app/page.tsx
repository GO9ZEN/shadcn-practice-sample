import CardComponent from "@/components/card-component";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[100vh] w-full items items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-12">
        <ModeToggle />

        <h1 className="text-3xl font-bold">NEXT TS STARTER</h1>

        <CardComponent />

        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
