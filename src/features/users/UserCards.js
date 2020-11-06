import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faEnvelope, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './UserCards.scss'

const UserCards = () => {

  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <div class="group p-10 mt-20 w-96 ">
      <Card class="flex flex-col group-hover:shadow-xl"> 
        <Card.Body class="h-96 bg-square-tiles bg-cyan rounded">
          <Card.Img class="-mt-24 object.contain h-48 w-48 mx-auto rounded-full h-16 w-16 shadow-xs group-hover:shadow-2xl" variant="top" src={user.photo} />
          <div class="flex flex-col space-y-4 mt-8 text-center">
            <div class="mx-auto inline-block align-middle">
              <h5 class="uppercase text-turquoise font-bold">{user.first_name} {user.last_name}
              </h5>
                <p class="w-72 h-10 text-slateblue flex flex-col justify-center">{user.position}</p>
              <hr class="w-56 mx-auto bg-turquoise" />
            </div>
            <div class="text-center text-slateblue space-y-6">
              <div class="text-center">
                <a href={`tel:${user.phone}`} class="ml-2 text-slateblue">
                  <FontAwesomeIcon className="fa-upsize" icon={faPhone}/> 
                  <span class="ml-2">{user.phone}</span>
                </a>
              </div>    
              <div>
                <a href={`mailto: ${user.email}`} class="text-center text-slateblue">
                  <FontAwesomeIcon className="fa-upsize" icon={faEnvelope}/>  
                  <span class="ml-2">Email Me</span>
                </a>
              </div>
            </div>
            <div class="flex justify-center">
              <button class="bg bg-slateblue hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-72 focus:shadow-outline">
                <FontAwesomeIcon className="fa-upsize" icon={faBookOpen}/>
                <span class="ml-4">Schedule a Consultation</span>
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  ))
  return (
    <div data-testid="userCards">
      <CardGroup class="flex justify-center flex-wrap">
        {renderedUsers}
      </CardGroup>
    </div>
  );
};

export default UserCards;