import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <section className="flex">
        <Sidebar/>
        <Dashboard/>
    </section>

  );
}
