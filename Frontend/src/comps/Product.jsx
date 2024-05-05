import React from 'react'
import { useAppContext } from '../app';

export default function Product() {

    const { item, setRoot } = useAppContext();
    console.log(item);

    return (
        <div className='p-5' style={{ backgroundColor: '#f7eded', padding: '50px' }}>
            <div className="container p-5">
                <div className="offset-lg-2 hotel-info">
                    <h1 className="text-center" style={{ fontSize: '30px' }}>{item.name}</h1>
                    <div className="card">
                        <img
                            src={`uploads/hotels/${item.img}`}
                            className="card-img-top"
                            alt="Hotel Image"
                            style={{
                                margin: '20px auto',
                                display: 'block',
                                height: '500px',
                                maxWidth: '100%',
                            }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Hotel Description</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                            <p className="card-text">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Location:</strong> {item.location}</li>
                            <li className="list-group-item"><strong>Rating:</strong> {item.rating}/5</li>
                            <li className="list-group-item"><strong>Price Range:</strong> {item.price} per night</li>
                            <li className="list-group-item"><strong>Facilities:</strong> {item.facilities}</li>
                            <li className="list-group-item"><strong>Room Types:</strong> {item.type}</li>
                            <li className="list-group-item"><strong>Check-in Time:</strong> 3:00 PM</li>
                            <li className="list-group-item"><strong>Check-out Time:</strong> 12:00 PM</li>
                            <li className="list-group-item"><strong>Local Attractions:</strong> {item.localAttractions}</li>
                        </ul>
                        <div className="card-body">
                            <button className="btn btn-danger btn-block">Book Now</button>
                            <button className="btn btn-secondary btn-block"
                                onClick={() => {
                                    setRoot('Home');
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
