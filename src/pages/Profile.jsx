import StarRating from "../components/StarRating";

const Profile = () => {
  const handleRating = (rating) => {
    alert(`You rated ${rating} stars`);
    // later → send to backend
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="bg-white shadow rounded p-4 space-y-2">
        <p><b>Name:</b> Amar</p>
        <p><b>Skills Offered:</b> Web Design</p>
        <p><b>Skills Needed:</b> Bike Repair</p>
        <p><b>Trust Score:</b> ⭐ 4.6 / 5</p>

        <hr />

        <p className="font-semibold">Rate your last barter:</p>
        <StarRating onRate={handleRating} />
      </div>
    </div>
  );
};

export default Profile;
