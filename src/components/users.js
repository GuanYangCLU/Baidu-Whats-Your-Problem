import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Userdetails from './userdetails';

// const handleClick = (setDetail, user) => {
//   setDetail(user.name);
//     props.history.push(`/users/${user.login}`);
// };

const Users = props => {
  const [userList, setUserList] = useState([]);
  //   const [Detail, setDetail] = useState('');
  useEffect(() => {
    axios
      .get('https://api.github.com/users?per_page=10')
      .then(res => {
        setUserList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {userList.map(user => {
          return (
            <li
              key={user.id}
              style={{ listStyle: 'none' }}
              // onClick={() => handleClick(setDetail, user)}
            >
              {user.id}
              <Link
                to={{
                  pathname: `/list/${user.login}`,
                  state: {
                    login: user.login
                  }
                }}
              >
                {user.login}{' '}
              </Link>
              <img
                src={user.avatar_url}
                style={{ width: 30, height: 30 }}
                alt={'avatar'}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
