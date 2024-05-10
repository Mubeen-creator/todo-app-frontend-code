import { Modal } from "@/components/ui/Modal";
import TodoTable from "@/components/TodoTable";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Style from "@/components/Style";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-8">

      <Style />

      {/* Add Task Section */}
      <section>
        <Modal title="Add New Task" Adding={true}>
        <Button variant="default" className="w-full bg-teal-600 px-2 py-1 text-white uppercase text-lg">Add Task</Button>
        </Modal>
      </section>


      {/* Todo Table */}
      <section className="mt-4">
        <TodoTable />
      </section>

    </main>
  );
}
