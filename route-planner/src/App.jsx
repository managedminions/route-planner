import { useState, useEffect } from 'react'

function App() {

    useEffect(() => {
        feather.replace();
        var script = document.createElement('script');
        script.async = false;
        script.src = "js/routeplanner.js";
        document.body.appendChild(script);
    }, []);

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="wrapper">
                <nav className="sidebar js-sidebar" id="sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html">
                            <span className="align-middle">AdminKit</span>
                        </a>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">Pages</li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="index.html">
                                    <i className="align-middle" data-feather="sliders" />{" "}
                                    <span className="align-middle">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-profile.html">
                                    <i className="align-middle" data-feather="user" />{" "}
                                    <span className="align-middle">Profile</span>
                                </a>
                            </li>
                            <li className="sidebar-header">Tools & Components</li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="ui-typography.html">
                                    <i className="align-middle" data-feather="align-left" />{" "}
                                    <span className="align-middle">Typography</span>
                                </a>
                            </li>
                            <li className="sidebar-header">Plugins & Addons</li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="maps-google.html">
                                    <i className="align-middle" data-feather="map" />{" "}
                                    <span className="align-middle">Maps</span>
                                </a>
                            </li>
                        </ul>
                        <div className="sidebar-cta">
                            <div className="sidebar-cta-content">
                                <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                                <div className="mb-3 text-sm">
                                    Are you looking for more components? Check out our premium version.
                                </div>
                                <div className="d-grid">
                                    <a className="btn btn-primary" href="upgrade-to-pro.html">
                                        Upgrade to Pro
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center" />
                        </a>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-icon dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        id="alertsDropdown">
                                        <div className="position-relative">
                                            <i className="align-middle" data-feather="bell" />
                                            <span className="indicator">4</span>
                                        </div>
                                    </a>
                                    <div
                                        aria-labelledby="alertsDropdown"
                                        className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0">
                                        <div className="dropdown-menu-header">4 New Notifications</div>
                                        <div className="list-group">
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-danger" data-feather="alert-circle" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Update completed</div>
                                                        <div className="text-muted small mt-1">
                                                            Restart server 12 to complete the update.
                                                        </div>
                                                        <div className="text-muted small mt-1">30m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-warning" data-feather="bell" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Lorem ipsum</div>
                                                        <div className="text-muted small mt-1">
                                                            Aliquam ex eros, imperdiet vulputate hendrerit et.
                                                        </div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-primary" data-feather="home" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Login from 192.186.1.8</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-success" data-feather="user-plus" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">New connection</div>
                                                        <div className="text-muted small mt-1">
                                                            Christina accepted your request.
                                                        </div>
                                                        <div className="text-muted small mt-1">14h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a className="text-muted" href="#">
                                                Show all notifications
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-icon dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        id="messagesDropdown">
                                        <div className="position-relative">
                                            <i className="align-middle" data-feather="message-square" />
                                        </div>
                                    </a>
                                    <div
                                        aria-labelledby="messagesDropdown"
                                        className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">4 New Messages</div>
                                        </div>
                                        <div className="list-group">
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img
                                                            alt="Vanessa Tucker"
                                                            className="avatar img-fluid rounded-circle"
                                                            src="img/avatars/avatar-5.jpg"
                                                        />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Vanessa Tucker</div>
                                                        <div className="text-muted small mt-1">
                                                            Nam pretium turpis et arcu. Duis arcu tortor.
                                                        </div>
                                                        <div className="text-muted small mt-1">15m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img
                                                            alt="William Harris"
                                                            className="avatar img-fluid rounded-circle"
                                                            src="img/avatars/avatar-2.jpg"
                                                        />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">William Harris</div>
                                                        <div className="text-muted small mt-1">
                                                            Curabitur ligula sapien euismod vitae.
                                                        </div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img
                                                            alt="Christina Mason"
                                                            className="avatar img-fluid rounded-circle"
                                                            src="img/avatars/avatar-4.jpg"
                                                        />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Christina Mason</div>
                                                        <div className="text-muted small mt-1">
                                                            Pellentesque auctor neque nec urna.
                                                        </div>
                                                        <div className="text-muted small mt-1">4h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item" href="#">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img
                                                            alt="Sharon Lessman"
                                                            className="avatar img-fluid rounded-circle"
                                                            src="img/avatars/avatar-3.jpg"
                                                        />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Sharon Lessman</div>
                                                        <div className="text-muted small mt-1">
                                                            Aenean tellus metus, bibendum sed, posuere ac, mattis
                                                            non.
                                                        </div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a className="text-muted" href="#">
                                                Show all messages
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                                        data-bs-toggle="dropdown"
                                        href="#">
                                        <i className="align-middle" data-feather="settings" />
                                    </a>
                                    <a
                                        className="nav-link dropdown-toggle d-none d-sm-inline-block"
                                        data-bs-toggle="dropdown"
                                        href="#">
                                        <img
                                            alt="Charles Hall"
                                            className="avatar img-fluid rounded me-1"
                                            src="img/avatars/avatar.jpg"
                                        />{" "}
                                        <span className="text-dark">Charles Hall</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="pages-profile.html">
                                            <i className="align-middle me-1" data-feather="user" /> Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="pie-chart" />{" "}
                                            Analytics
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="index.html">
                                            <i className="align-middle me-1" data-feather="settings" />{" "}
                                            Settings & Privacy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="help-circle" />{" "}
                                            Help Center
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Log out
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
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
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-start">
                                    <p className="mb-0">
                                        <a
                                            className="text-muted"
                                            href="https://adminkit.io/"
                                            target="_blank">
                                            <strong>AdminKit</strong>
                                        </a>{" "}
                                        -{" "}
                                        <a
                                            className="text-muted"
                                            href="https://adminkit.io/"
                                            target="_blank">
                                            <strong>Bootstrap Admin Template</strong>
                                        </a>
                                        ©
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a
                                                className="text-muted"
                                                href="https://adminkit.io/"
                                                target="_blank">
                                                Support
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="text-muted"
                                                href="https://adminkit.io/"
                                                target="_blank">
                                                Help Center
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="text-muted"
                                                href="https://adminkit.io/"
                                                target="_blank">
                                                Privacy
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="text-muted"
                                                href="https://adminkit.io/"
                                                target="_blank">
                                                Terms
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default App
