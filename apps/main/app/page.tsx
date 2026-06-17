import { Button } from "@workspace/ui/components/button";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to the Main App!</h1>
        <Button variant="primary">Click Me</Button>
      </div>
    </>
  );
}
