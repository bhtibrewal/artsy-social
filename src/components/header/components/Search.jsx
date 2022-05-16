import { useEffect, useState } from "react";
import { getUsers } from "../../../services";
import { UserSection } from "../../user_section/UserSection";
import { FaSearch } from "../../../assets/icons";

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers({ setUsers });
  }, []);
  return (
    <div className={`artsy-input icon-input search-input `}>
      <i className="fas fa-search"></i>
      <FaSearch className="icon" />
      <input
        placeholder="Search..."
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div className="search-dropdown">
        {users
          .filter((user) =>
            searchKeyword === ""
              ? false
              : (user.firstName + " " + user.lastName).includes(searchKeyword)
          )
          .map((user) => {
            return <UserSection key={user._id} user={user} />;
          })}
      </div>
    </div>
  );
};
