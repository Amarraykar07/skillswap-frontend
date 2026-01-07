const EmptyState = ({ message }) => (
  <div className="flex flex-col items-center justify-center h-64">
    <img src="/src/assets/hero.png" alt="Empty" className="h-32 mb-4" />
    <p className="text-gray-500">{message}</p>
  </div>
);

export default EmptyState;
