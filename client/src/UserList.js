// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './UserList.scss'; // Import the CSS file

// function UserList() {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState(null);


//     useEffect(() => {
//         axios
//             .get('/api/users') // This will send the request to your Express server
//             .then((response) => {
//                 setUsers(response.data);
//             })
//             .catch((error) => {
//                 setError(error);
//             });
//     }, []);
//     return (
//         <div>
//             {error ? (
//                 <p>Error: {error.message}</p>
//             ) : (
//                 <div className="user-container">
//                     <h2>Home Page</h2>
//                     {users.map((user) => (
//                         <div key={user.id} className="user-item">
//                             {/* <div className="user-text"> */}
//                                 <div className='name'>
//                                     <h4>Name</h4>
//                                     {user.name}
//                                 </div>
//                                 <div className='contact'>
//                                     <h4>Company</h4>
//                                     {user.company.name}
//                                 </div>
//                                 <div className='city'>
//                                     <h4>City</h4>
//                                     {user.address.city}
//                                 </div>
//                                 <div className='linkk'>
//                                 <div className='child'><Link to={`/UserDetails`} style={{ color: 'black', textDecoration:'none'}} state={{ user }}>View Details</Link></div>
//                                 </div>
//                             {/* </div> */}

//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UserList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.scss'; // Import the CSS file

function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(3); // Number of users to display per page

    useEffect(() => {
        axios
            .get('/api/users') // This will send the request to your Express server
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    // Calculate the index range for the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Function to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => (
        <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
        >
            {number}
        </button>
    ));

    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="user-container">
                    <h2>Home Page</h2>
                    {currentUsers.map((user) => (
                        <div key={user.id} className="user-item">
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
                                    <Link to={`/UserDetails`} style={{ color: 'black', textDecoration: 'none' }} state={{ user }}>View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="pagination">
                        {renderPageNumbers}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserList;
