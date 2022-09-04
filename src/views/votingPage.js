import React from 'react';
// import sections
import HeroVoting from '../components/sections/votingFolder/heroVoting';
import Ballot from '../components/sections/votingFolder/ballotScript';  

const Voting = () => {

  return (
    <>
      <HeroVoting className="illustration-section-01" />
       
      <Ballot   />  
    </>
  );
}

export default Voting;