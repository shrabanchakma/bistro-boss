import UseAuth from "../../../../Hooks/UseAuth";

const UserHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <span>Hey! Welcome {user?.displayName ? user.displayName : "back"}</span>
    </div>
  );
};

export default UserHome;
