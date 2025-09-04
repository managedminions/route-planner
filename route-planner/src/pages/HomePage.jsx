import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <div className="form-inline mb-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="form-group align-items-center">
                                <input
                                    autoFocus
                                    className="form-control"
                                    id="origin"
                                    name="origin"
                                    placeholder="Starting Address"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group align-items-center">
                                <input
                                    className="form-control"
                                    id="destination"
                                    name="destination"
                                    placeholder="Ending Address"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group align-items-center">
                                <button
                                    className="btn btn-outline-success me-2"
                                    id="start-btn"
                                    type="button">
                                    Start
                                </button>
                                <button
                                    className="btn btn-outline-primary me-2"
                                    id="default-btn"
                                    type="button">
                                    Default
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    id="reset-btn"
                                    type="button">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="h3 d-inline align-middle">Route Planner</h1>
                        <div className="flex-grow rounded-md h-96 lg:h-[700px] z-0" id="map" />
                    </div>
                    <div className="col-lg-4">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Directions</h3>
                        <p className="text-dark mb-4">
                            Click the map to set your start and end points, or enter the addresses above and click Start.
                        </p>
                        <div
                            className="p-4 rounded-md bg-success-subtle border border-blue-200"
                            id="message-box">
                            Click anywhere on the map to set your starting point.
                        </div>
                        <div className="d-none mt-4 text-center" id="loading-indicator">
                            <div className="spinner-border text-primary mx-auto" role="status" />
                            <p className="mt-2">Calculating route...</p>
                        </div>
                        <div className="mt-4 d-none" id="route-details">
                            <div className="row">
                                <div className="col-3 rounded-3">
                                    <h4 className="font-semibold" id="distance-box" />
                                </div>
                                <div className="col-1" />
                                <div className="col-3 rounded-3">
                                    <h4 className="font-semibold" id="time-box" />
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mt-4 mb-2">Driving Directions</h3>
                            <div className="overflow-y-auto max-h-80 pr-2">
                                <ol
                                    className="list-decimal list-inside space-y-2"
                                    id="directions-list"
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-lg btn-danger w-100 mt-4"
                            disabled
                            id="clear-btn">
                            Clear Route
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;