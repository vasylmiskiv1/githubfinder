import { useContext } from "react";
import Loader from "../layout/Loader";
import UserItem from "./UserItem";

import GithubContext from "../../context/github/GithubContext";

export default function UserList() {
  const { users, loader } = useContext(GithubContext);

  if (!loader) {
    return (
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Loader />;
  }
}
