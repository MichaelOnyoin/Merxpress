import { AddTodoForm } from "@/components/todo/TodoAddForm";
import { Header } from "@/components/Header";
import { TodosList } from "@/components/todo/TodoList";
import { stackServerApp } from "@/stack";

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (!user) {
    return <Header />;
  }

  return (
    <div>
      <Header />
      
        <AddTodoForm />
        <TodosList />
     
    </div>
  );
}