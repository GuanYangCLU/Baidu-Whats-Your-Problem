import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = props => {
  // console.log(props.location.state);
  const [Detail, setDetail] = useState([]);
  const detailNames = ['name', 'location', 'followers', 'following'];
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.location.state.username}`)
      .then(res => {
        // const arr = {...res.data};
        setDetail([
          res.data.name,
          res.data.location,
          res.data.followers,
          res.data.following
        ]);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <div>
      <div>
        {Detail.map((item, index) => {
          return (
            <div>
              {detailNames[index]} : {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
