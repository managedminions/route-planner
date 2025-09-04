import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <main className="content">
            <div className="container-fluid p-0">
                <div className="mb-3">
                    <h1 className="h3 d-inline align-middle">Profile</h1>
                    <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
                        Get more page examples
                    </a>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xl-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Profile Details</h5>
                            </div>
                            <div className="card-body text-center">
                                <img
                                    alt="Christina Mason"
                                    className="img-fluid rounded-circle mb-2"
                                    height="128"
                                    src="img/avatars/avatar-4.jpg"
                                    width="128"
                                />
                                <h5 className="card-title mb-0">Christina Mason</h5>
                                <div className="text-muted mb-2">Lead Developer</div>
                                <div>
                                    <a className="btn btn-primary btn-sm" href="#">
                                        Follow
                                    </a>
                                    <a className="btn btn-primary btn-sm" href="#">
                                        <span data-feather="message-square" /> Message
                                    </a>
                                </div>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Skills</h5>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    HTML
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    JavaScript
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    Sass
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    Angular
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    Vue
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    React
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    Redux
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    UI
                                </a>
                                <a className="badge bg-primary me-1 my-1" href="#">
                                    UX
                                </a>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">About</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <span className="feather-sm me-1" data-feather="home" /> Lives
                                        in <a href="#">San Francisco, SA</a>
                                    </li>
                                    <li className="mb-1">
                                        <span className="feather-sm me-1" data-feather="briefcase" />{" "}
                                        Works at <a href="#">GitHub</a>
                                    </li>
                                    <li className="mb-1">
                                        <span className="feather-sm me-1" data-feather="map-pin" /> From{" "}
                                        <a href="#">Boston</a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Elsewhere</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <a href="#">staciehall.co</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-xl-9">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Activities</h5>
                            </div>
                            <div className="card-body h-100">
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Vanessa Tucker"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar-5.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">5m ago</small>
                                        <strong>Vanessa Tucker</strong> started following{" "}
                                        <strong>Christina Mason</strong>
                                        <br />
                                        <small className="text-muted">Today 7:51 pm</small>
                                        <br />
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Charles Hall"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">30m ago</small>
                                        <strong>Charles Hall</strong> posted something on{" "}
                                        <strong>Christina Mason</strong>
                                        's timeline
                                        <br />
                                        <small className="text-muted">Today 7:21 pm</small>
                                        <div className="border text-sm text-muted p-2 mt-1">
                                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                                            sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                            hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                                            tempus. Donec vitae sapien ut libero venenatis faucibus.
                                            Nullam quis ante.
                                        </div>
                                        <a className="btn btn-sm btn-danger mt-1" href="#">
                                            <i className="feather-sm" data-feather="heart" /> Like
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Christina Mason"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar-4.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">1h ago</small>
                                        <strong>Christina Mason</strong> posted a new blog
                                        <br />
                                        <small className="text-muted">Today 6:35 pm</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="William Harris"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar-2.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">3h ago</small>
                                        <strong>William Harris</strong> posted two photos on{" "}
                                        <strong>Christina Mason</strong>
                                        's timeline
                                        <br />
                                        <small className="text-muted">Today 5:12 pm</small>
                                        <div className="row g-0 mt-1">
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                <img
                                                    alt="Unsplash"
                                                    className="img-fluid pe-2"
                                                    src="img/photos/unsplash-1.jpg"
                                                />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                <img
                                                    alt="Unsplash"
                                                    className="img-fluid pe-2"
                                                    src="img/photos/unsplash-2.jpg"
                                                />
                                            </div>
                                        </div>
                                        <a className="btn btn-sm btn-danger mt-1" href="#">
                                            <i className="feather-sm" data-feather="heart" /> Like
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="William Harris"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar-2.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">1d ago</small>
                                        <strong>William Harris</strong> started following{" "}
                                        <strong>Christina Mason</strong>
                                        <br />
                                        <small className="text-muted">Yesterday 3:12 pm</small>
                                        <div className="d-flex align-items-start mt-1">
                                            <a className="pe-3" href="#">
                                                <img
                                                    alt="Christina Mason"
                                                    className="rounded-circle me-2"
                                                    height="36"
                                                    src="img/avatars/avatar-4.jpg"
                                                    width="36"
                                                />
                                            </a>
                                            <div className="flex-grow-1">
                                                <div className="border text-sm text-muted p-2 mt-1">
                                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                                                    lorem. Maecenas nec odio et ante tincidunt tempus.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Christina Mason"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar-4.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">1d ago</small>
                                        <strong>Christina Mason</strong> posted a new blog
                                        <br />
                                        <small className="text-muted">Yesterday 2:43 pm</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-start">
                                    <img
                                        alt="Charles Hall"
                                        className="rounded-circle me-2"
                                        height="36"
                                        src="img/avatars/avatar.jpg"
                                        width="36"
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end text-navy">1d ago</small>
                                        <strong>Charles Hall</strong> started following{" "}
                                        <strong>Christina Mason</strong>
                                        <br />
                                        <small className="text-muted">Yesterdag 1:51 pm</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-grid">
                                    <a className="btn btn-primary" href="#">
                                        Load more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>);
};

export default ProfilePage;