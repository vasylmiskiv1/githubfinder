import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center sapce-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">
            <Link
              className="text-base-content text-opacity-40"
              to={`/user/${login}`}
            >
              Visit Profile
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
