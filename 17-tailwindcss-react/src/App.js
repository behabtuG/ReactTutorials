import TailwindExample from "./components/Container";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Click Me
      </button>
      <TailwindExample />
    </div>
  );
}
