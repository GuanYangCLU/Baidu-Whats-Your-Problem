import React, { useState, useEffect } from 'react';
import axios from 'axios';

const handleBack = props => {
  props.history.push('/list');
};

const Userdetails = props => {
  //   console.log(props);
  const [Detail, setDetail] = useState([]);
  const detailNames = ['name', 'location', 'followers', 'following'];
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.location.state.login}`)
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
      <div>
        <button onClick={() => handleBack(props)}>Back</button>
      </div>
    </div>
  );
};

export default Userdetails;
