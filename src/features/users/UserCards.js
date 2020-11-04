import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

const UserCards = () => {

  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <div>
      <Card>
        <Card.Img variant="top" src={user.photo} />
        <Card.Body>
          <Card.Title>{user.first_name} {user.last_name}
          </Card.Title>
          <Card.Text>
            <p>{user.position}</p>
          </Card.Text>
          <p>{user.email}</p>
          <p>{user.phone}</p>    
        </Card.Body>
        {/* <Card.Footer> */}
        {/* </Card.Footer> */}
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