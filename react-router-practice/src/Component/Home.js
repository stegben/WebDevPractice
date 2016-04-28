import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
  render(){
    return (
      <div>{'Home'}
        <Link to="/chat">Click to Chat Room</Link>
      </div>
    );
  };
};

export default Home;
