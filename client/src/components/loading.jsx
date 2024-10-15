import { Loader2 } from "lucide-react";

export default function Loading({ title, text }) {
  return (
    <div className="fixed flex flex-col items-center justify-center inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 z-50">
      <div className="bg-white dark:bg-zinc-800 bg-opacity-80 dark:bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 text-green-600 dark:text-green-600 animate-spin" />
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            {title}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
