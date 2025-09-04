import React from 'react';
import { Link } from 'react-router-dom';

const MapsPage = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <div className="mb-3">
                    <h1 className="h3 d-inline align-middle">Google Maps</h1>
                    <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
                        Get more Google Maps examples
                    </a>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Default Map</h5>
                                <h6 className="card-subtitle text-muted">
                                    Displays the default road map view.
                                </h6>
                            </div>
                            <div className="card-body">
                                <div
                                    className="content"
                                    id="default_map"
                                    style={{
                                        height: "300px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Hybrid Map</h5>
                                <h6 className="card-subtitle text-muted">
                                    Displays a mixture of normal and satellite views.
                                </h6>
                            </div>
                            <div className="card-body">
                                <div
                                    className="content"
                                    id="hybrid_map"
                                    style={{
                                        height: "300px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>);
};

export default MapsPage;