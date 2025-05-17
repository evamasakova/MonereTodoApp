export default function LoadCard() {
  return (
    <>
      <div className="flex items-center  justify-center bg-transparent">
        <div className="bg-white border  border-gray-300 rounded-xl shadow-md p-6 w-80 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Info Card
          </h2>

          <p className="text-gray-600 text-sm">
            Tasks are loading
          </p>
        </div>
      </div>
    </>
  );
}
