function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          Task Management App
        </h1>
        <p className="text-lg text-neutral-600">
          TailwindCSS v3.4 configured successfully with pnpm! 🎨
        </p>
        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-primary-600 px-4 py-2 text-white shadow-md transition-colors hover:bg-primary-700">
            Primary Button
          </button>
          <button className="rounded-lg bg-secondary-600 px-4 py-2 text-white shadow-md transition-colors hover:bg-secondary-700">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
