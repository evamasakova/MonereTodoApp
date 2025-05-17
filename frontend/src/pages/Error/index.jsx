export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white border border-red-200 shadow-md rounded-xl p-6 max-w-sm w-full text-center space-y-4">
        <h2 className="text-lg font-semibold text-red-700">Error</h2>
        <p className="text-sm text-gray-700">Something has gone wrong!</p>
      </div>
    </div>
  );
}
