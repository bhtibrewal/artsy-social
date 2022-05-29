import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../../services";
import { UserSection } from "../../user_section/UserSection";
import { FaSearch } from "../../../assets/icons";

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const debounce = (callback, delay = 1000) => {
    let timeout;
    return (...args) => {
      setSearchLoading(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSearchLoading(false);
        callback(...args);
      }, delay);
    };
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    updateUsersToShow(e.target.value);
  };
  const updateUsersToShow = useCallback(
    debounce((searchKeyword) => {
      const foundUsers = users.filter((user) =>
        searchKeyword === ""
          ? false
          : (user.firstName + " " + user.lastName)
              .toLowerCase()
              .includes(searchKeyword.toLowerCase())
      );
      setFilteredUsers(foundUsers);
    }),
    [users]
  );

  useEffect(() => {
    getUsers({ setUsers });
  }, []);
  return (
    <div className={`artsy-input icon-input search-input `}>
      <FaSearch className="icon" />
      <input
        placeholder="Search..."
        type="text"
        value={searchKeyword}
        onChange={handleSearch}
      />
      {searchKeyword !== "" && (
        <div className="search-dropdown">
          {searchLoading ? (
            <p className="body-l">Loading...</p>
          ) : (
            filteredUsers.map((user) => {
              return <UserSection key={user._id} user={user} />;
            })
          )}
          {!filteredUsers?.length && !searchLoading && (
            <p className="body-l">No users found</p>
          )}
        </div>
      )}
    </div>
  );
};
