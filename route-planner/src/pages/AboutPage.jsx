import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">About</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="img/logo-x-small.png" className="img-fluid float-start me-3 mb-0"></img>
                                <p>
                                    Our <b>Route Planner</b> is a dynamic and responsive web application designed for seamless route planning.
                                    Built with <b>React</b>, it leverages the component-based architecture to provide a smooth and efficient user experience.
                                    The application's user interface is styled using <b>Bootstrap 5</b>, ensuring a clean, modern, and mobile-first design that
                                    is both visually appealing and highly functional across various devices. Because the project relies solely on standard
                                    web technologies, <b>HTML, CSS, and JavaScript</b>, and avoids any server-side dependencies, it is perfectly suited for
                                    static hosting. This allows the entire application to be deployed directly to <b>GitHub Pages</b> using the gh-pages library,
                                    providing a simple and cost-effective solution for making the application publicly accessible.
                                </p>
                                <p>
                                    Like any advanced <b>Geospatial Route Planner</b>, our system excels at <b>multi-stop optimization</b>, intelligently determining the most
                                    efficient sequence for a series of locations. It offers <b>dynamic routing</b>, with the ability to adapt to real-time conditions
                                    such as traffic congestion, road closures, or new pickup requests, ensuring that your plan is always current and viable.
                                    he system also takes into consideration a wide range of constraints, including <b>vehicle type</b>, time windows for deliveries or
                                    appointments, driver or vehicle availability, and toll costs and fuel efficiency. To make these informed routing decisions,
                                    it integrates multiple layers of geographical data, such as road networks, elevation, points of interest, and both real-time
                                    and historical traffic data. In essence, our tool goes beyond simple navigation to provide a strategic and data-driven solution
                                    for complex logistical challenges, ultimately saving time, reducing fuel consumption, and significantly improving overall
                                    operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>);
};

export default AboutPage;