import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './userdetails.scss';

function UserDetails() {
  const location = useLocation();
  const { user } = location.state || {};
  // Fetch user details using the userId parameter and display them
  return (
    <div className="user-details">
      <h2>Details</h2>
      {user ? (
        <div className='content'>
          <div className="user-text">
            <div className='name'>
              <h4>Name</h4>
              {user.name}
            </div>
            <div className='contact'>
              <h4>Company</h4>
              {user.company.name}
            </div>
            <div className='city'>
              <h4>City</h4>
              {user.address.city}
            </div>
            <div className='linkk'>
              <div className='child'>
                <Link to={`/`} style={{ color: 'black', textDecoration: 'none' }}>Hide Details</Link>
              </div>
            </div>
          </div>
          <div className='description'>
            <h2>description</h2>
            <p>Welcome to {user.company.name}. From our home in {user.address.city}, we fly to passenger and cargo destinations in the Middle East, Africa, Europe, Asia, Australia and North America. Together with our codeshare partners, our network offers access to hundreds of international destinations in just one booking.</p>
            <div className='details'>
              <div className='person-details'>
                <h4>Contact details</h4>
                <div className='details-name'>
                  <h4>Name:</h4>
                  <div className='detname'>{user.name}</div>
                </div>
                <div className='details-contact'>
                  <h4>Email:</h4>
                  <div className='detname'>{user.email}</div>
                </div>
                <div className='details-city'>
                  <h4>website:</h4>
                  <div className='detname'>{user.website}</div>
                </div>

              </div>
              <div className='adress-details'>
                <h4>Adress</h4>
                <div className='details-address'>
                  <p>{user.address.street} {user.address.suite}</p>
                </div>
                <div className='details-contact'>
                  <h4>City:</h4>
                  <div className='detname'>{user.address.city}</div>
                </div>
                <div className='details-city'>
                  <h4>Zipcode:</h4>
                  <div className='detname'>{user.address.zipcode}</div>
                </div>


              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
export default UserDetails;