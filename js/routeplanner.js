//document.addEventListener("DOMContentLoaded", () => {
const orsApiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImMwMGZmNjIwYTkxMzQwMWRiZWEzYmZmZmRhNjBhYjc2IiwiaCI6Im11cm11cjY0In0=";

// Initialize the map
const map = L.map("map").setView([38.2527, -85.7585], 9); // Centered on Louisville, KY

// Add an OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let startMarker = null;
let endMarker = null;
let routePolyline = null;
const messageBox = document.getElementById("message-box");
const loadingIndicator = document.getElementById("loading-indicator");
const clearBtn = document.getElementById("clear-btn");
const routeDetails = document.getElementById("route-details");
const distanceBox = document.getElementById("distance-box");
const timeBox = document.getElementById("time-box");
const directionsList = document.getElementById("directions-list");
const startBtn = document.getElementById("start-btn");
const defaultBtn = document.getElementById("default-btn");
const resetBtn = document.getElementById("reset-btn");
const startInput = document.getElementById("origin");
const endInput = document.getElementById("destination");

// --- UI Functions ---
const updateMessage = (message, type = "info") => {
    let colorClass = "";
    let bgColorClass = "";
    if (type === "info") {
        colorClass = "text-dark";
        bgColorClass = "bg-info-subtle";
    } else if (type === "success") {
        colorClass = "text-dark";
        bgColorClass = "bg-success-subtle";
    } else if (type === "error") {
        colorClass = "text-dark";
        bgColorClass = "bg-danger-subtle";
    }
    messageBox.className = `p-4 rounded-md ${bgColorClass} ${colorClass} border border-${type}-200`;
    messageBox.innerHTML = message;
};

const toggleLoading = (isLoading) => {
    clearBtn.disabled = isLoading;
    resetBtn.disabled = isLoading;
};

const displayRouteDetails = (data) => {
    loadingIndicator.classList.add("d-none");
    routeDetails.classList.remove("d-none");

    const segment = data.features[0].properties.segments[0];

    // Display distance
    const distanceMeters = segment.distance;
    const distanceMiles = (distanceMeters * 0.000621371).toFixed(2);
    distanceBox.textContent = `${distanceMiles} miles`;

    // Display estimated time
    const durationSeconds = segment.duration;
    const hours = Math.floor(durationSeconds / 3600);
    const minutes = Math.floor((durationSeconds % 3600) / 60);

    let timeString = "";
    if (hours > 0) {
        timeString += `${hours} hr `;
    }
    timeString += `${minutes} min`;
    timeBox.textContent = timeString;

    directionsList.innerHTML = "";
    segment.steps.forEach((step) => {
        const listItem = document.createElement("li");
        const distance = (step.distance * 0.000621371).toFixed(2);
        listItem.innerHTML = `<span class="font-semibold">${step.instruction}</span> <span class="text-gray-500 text-sm">(${distance} miles)</span>`;
        directionsList.appendChild(listItem);
    });
};

const clearMap = () => {
    if (startMarker) {
        map.removeLayer(startMarker);
        startMarker = null;
    }
    if (endMarker) {
        map.removeLayer(endMarker);
        endMarker = null;
    }
    if (routePolyline) {
        map.removeLayer(routePolyline);
        routePolyline = null;
    }
    map.setView([38.2527, -85.7585], 9);
    updateMessage("Map cleared. Click to set a new starting point.");
    clearBtn.disabled = true;
    routeDetails.classList.add("d-none");
    distanceBox.textContent = "";
    timeBox.textContent = "";
    directionsList.innerHTML = "";
};

// --- API Function ---
const getRoute = async (start, end) => {
    if (!start || !end) return;

    toggleLoading(true);
    loadingIndicator.classList.remove("d-none");

    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${orsApiKey}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            if (data.features && data.features.length > 0) {
                const coordinates = data.features[0].geometry.coordinates.map(
                    (coord) => [coord[1], coord[0]]
                );

                // Remove previous route if exists
                if (routePolyline) {
                    map.removeLayer(routePolyline);
                }

                routePolyline = L.polyline(coordinates, {
                    color: "#3b82f6",
                    weight: 6,
                    opacity: 0.8
                }).addTo(map);

                // Fit the map to the new route
                map.fitBounds(routePolyline.getBounds());
                updateMessage("Route calculated successfully!", "success");
                displayRouteDetails(data);
            } else {
                updateMessage(
                    "Could not find a route between the selected points.",
                    "error"
                );
                routeDetails.classList.add("d-none");
            }
        } else {
            throw new Error(data.error?.message || "Failed to fetch route");
        }
    } catch (error) {
        console.error("Routing Error:", error);
        updateMessage(`Error: ${error.message}. Please check your API key or try different locations.`, "error");
    } finally {
        toggleLoading(false);
        loadingIndicator.classList.add("d-none");
    }
};

async function geoCodeAndRoute() {
    try {
        clearMap();
        loadingIndicator.classList.remove('d-none');
        var start = await geoCodeAddressAsync(startInput.value);
        var end = await geoCodeAddressAsync(endInput.value);
        if (start && end) {
            getRoute(start, end);
        }
    } catch (error) {
        console.error("GeoCoding Error:", error);
        updateMessage(`Error: ${error.message}. Please make sure you have valid starting and ending address information.`, "error");
    }
};

async function geoCodeAddressAsync(address) {
    var result = {
        lat: 0,
        lng: 0
    };
    try {
        const encodedAddress = encodeURIComponent(address);
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
            result.lat = data[0].lat;
            result.lng = data[0].lon;
        } else {
            result = "";
        }
    } catch (error) {
        updateMessage(`Geocoding failed: ${error}`, 'error');
    }
    return result;
};

async function reverseGeocodeAsync(latitude, longitude) {
    const nominatimBaseUrl = 'https://nominatim.openstreetmap.org/reverse';
    const format = 'jsonv2';
    const zoom = 18;
    const addressdetails = 1;

    const url = `${nominatimBaseUrl}?format=${format}&lat=${latitude}&lon=${longitude}&zoom=${zoom}&addressdetails=${addressdetails}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Route-Planner/1.0 (admin@pcdmz.com)'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during reverse geocoding:', error);
        return null;
    }
}

// Example Usage:
// reverseGeocodeAsync(40.7128, -74.0060)
//   .then(data => {
//     if (data) {
//       console.log('Reverse Geocoding Result:', data);
//       console.log('Display Name:', data.display_name);
//       console.log('Address Components:', data.address);
//     } else {
//       console.log('Could not reverse geocode the coordinates.');
//     }
//   });

function defaultCurrentAddress() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    reverseGeocodeAsync(position.coords.latitude, position.coords.longitude)
                        .then(data => {
                            if (data) {
                                startInput.value = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
                                L.marker(position).addTo(map);
                            } else {
                                startInput.value = "";
                                console.log('Could not reverse geocode the coordinates.');
                            }
                        });
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            console.error("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            console.error("An unknown error occurred.");
                            break;
                    }
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser");
        }
    } catch (error) {
        console.error(error.message);
    }
}

function getCurrentPosition() {
    if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(
            // Success callback function
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log(`Latitude: ${latitude}`);
                console.log(`Longitude: ${longitude}`);
                console.log(`Accuracy (meters): ${position.coords.accuracy}`);

                return position;
            },
            // Error callback function
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred.");
                        break;
                }
            },
            // Optional options object
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};

// --- Event Listeners ---
map.on("click", (e) => {
    const { lat, lng } = e.latlng;

    if (!startMarker) {
        startMarker = L.marker([lat, lng])
            .addTo(map)
            .bindPopup("Start")
            .openPopup();
        updateMessage(
            "Starting point set. Now click on the map to set your destination."
        );
    } else if (!endMarker) {
        endMarker = L.marker([lat, lng]).addTo(map).bindPopup("End").openPopup();
        getRoute(startMarker.getLatLng(), endMarker.getLatLng());
        clearBtn.disabled = false;
    } else {
        // Reset for a new route
        clearMap();
        startMarker = L.marker([lat, lng])
            .addTo(map)
            .bindPopup("Start")
            .openPopup();
        updateMessage("New starting point set. Click for a new destination.");
    }
});

clearBtn.addEventListener("click", clearMap);
defaultBtn.addEventListener("click", defaultCurrentAddress);
resetBtn.addEventListener("click", clearMap);
startBtn.addEventListener("click", geoCodeAndRoute);

//});
