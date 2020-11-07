import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faEnvelope, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './UserCards.scss'

const UserCards = () => {

  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <div class="group p-10 mt-20 w-96 ">
      <Card class="flex flex-col card"> 
        
        <Card.Body class="h-96 bg-square-tiles bg-cyan rounded group-hover:shadow-xl">
          {/* USER PHOTO */}
          <Card.Img class="-mt-24 object.contain h-48 w-48 mx-auto rounded-full shadow-xs group-hover:shadow-2xl" variant="top" src={user.photo} /> 

          {/* FOR SPACE BETWEEN FULL NAME, POSITION AND EMPLOYEE DETAILS */}
          <div class="flex flex-col space-y-4 mt-8 text-center">

            {/* VERTICALLY AND HORIZONTALLY CENTERS FULL NAME AND POSITION */}
            <div class="mx-auto inline-block align-middle">

              {/* FULL NAME */}
              <h5 class="uppercase text-turquoise font-bold">{user.first_name} {user.last_name}
              </h5>

              {/* POSITION */}
              {user.position ? 
              <p class="w-72 h-10 text-slateblue flex flex-col justify-center">{user.position}</p>
                : <p class="w-72 h-10"></p> }
              <hr class="w-56 mx-auto bg-turquoise" />
            </div>

            {/* FOR SPACE BETWEEN PHONE NUMBER, EMAIL AND SCHEDULE BUTTON */}
            <div class="text-center text-slateblue space-y-6">

              {/* USER PHONE DETAILS */}
              {user.phone ?               
              <div class="text-center mx-auto inline-block align-middle">
                <a href={`tel:${user.phone}`} class="ml-2 text-slateblue contact-align">
                  <FontAwesomeIcon className="fa-upsize" icon={faPhone}/> 
                  <span class="ml-2">{user.phone}</span>
                </a>
              </div> : <div class="inline-block"></div>}


              {/* USER EMAIL DETAILS */}
              {user.email ? 
              <div>
                <a href={`mailto: ${user.email}`} class="text-center text-slateblue contact-align">
                  <FontAwesomeIcon className="fa-upsize" icon={faEnvelope}/>
                  <span class="ml-2 inline-block ">Email Me</span>
                </a>
              </div> 
              : 
              // MAYBE THIS IS HACKY?? WILL LOOK INTO BETTER SOLUTION
              <div class="inline-block contact-align"><a href="notgonnawork"><span class="inline-block"></span></a></div> }

            </div>

            {/* SCHEDULE BUTTON */}
            <div class="flex justify-center">
              <button class="bg bg-slateblue hover:bg-blue-700 active:bg-slateblue text-white font-bold py-2 px-4 border border-blue-700 rounded w-72 contact-align button button-press -mt-1">
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