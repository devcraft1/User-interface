import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(`Edit Username (current: ${user.getUsername()})`);

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="flex flex-col text-xs relative  w-24 lg:mx-auto">
      <button
        className="text-sm text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700"
        disabled={isUserUpdating}
        onClick={setUsername}
      >
        Edit User
      </button>
    </div>
  );
}

export default ChangeUsername;
