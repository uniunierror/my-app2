export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
