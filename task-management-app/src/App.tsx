function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          Task Management App
        </h1>
        <p className="text-lg text-neutral-600">
          TailwindCSS v3.4 configured successfully with pnpm! 🎨
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors shadow-md">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
