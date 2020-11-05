import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const UserCards = () => {

  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <div class="flex flex-col p-10 mt-20 w-96">
      <Card>
        <Card.Body class="h-84  bg-cyan">
        <Card.Img class="-mt-24 object.contain h-48 w-48 mx-auto rounded-full h-16 w-16 mb-6" variant="top" src={user.photo} />
          <Card.Title class="uppercase text-center text-turquoise font-bold">{user.first_name} {user.last_name}
          </Card.Title>
          <div class="text-center text-slateblue">
            <Card.Text class="text-center">
              <p>{user.position}</p>
            </Card.Text>
            <hr class="w-56 mx-auto bg-turquoise" />
            <div class="text-center mb-3">
              <a href={`tel:${user.phone}`} class="ml-2 text-slateblue">
                <FontAwesomeIcon icon={faPhone}/> 
                <span class="ml-2">{user.phone}</span>
              </a>
            </div>    
            <a href={`mailto: ${user.email}`} class="mb-4 text-center text-slateblue">Email Me</a>
          </div>
          <div class="flex justify-center">
            <button class="bg bg-slateblue hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-72">
              <FontAwesomeIcon icon="book-open"/>
              Schedule a Consultation
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ))
  return (
    <div data-testid="userCards">
      <CardGroup>
        {renderedUsers}
      </CardGroup>
    </div>
  );
};

export default UserCards;