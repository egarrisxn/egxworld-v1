export default function Loader() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="bg-primary h-4 w-4 animate-bounce rounded-full"></div>
        <div className="bg-primary h-4 w-4 animate-bounce rounded-full [animation-delay:-.3s]"></div>
        <div className="bg-primary h-4 w-4 animate-bounce rounded-full [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
