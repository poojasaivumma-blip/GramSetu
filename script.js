// =========================
// VILLAGE COORDINATOR
// =========================

function requestOutreach() {

    alert(
        "Healthcare outreach request submitted successfully!"
    );

}

function scheduleCamp() {
    alert("Camp scheduling module opened.");
}

function viewRecords() {
    alert("Previous outreach records opened.");
}

function addRecord() {
    alert("Camp record form opened.");
}

function collaborate() {
    alert("Collaboration module opened.");
}

const mapElement = document.getElementById("gramSetuMap");

if (mapElement) {

    const map = L.map("gramSetuMap").setView(
        [15.9129, 79.7400],
        7
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);

    const villages = [

        {
            name: "Rampur",
            district: "Kurnool",
            lat: 15.8281,
            lng: 78.0373,
            status: "Outreach Due",
            color: "#e5b93f"
        },

        {
            name: "Kadapa Village",
            district: "Kadapa",
            lat: 14.4673,
            lng: 78.8242,
            status: "Covered",
            color: "#45a86b"
        },

        {
            name: "Anantapur Village",
            district: "Anantapur",
            lat: 14.6819,
            lng: 77.6006,
            status: "Not Covered",
            color: "#e04b4b"
        }

    ];

    villages.forEach(village => {

        const marker = L.circleMarker(
            [village.lat, village.lng],
            {
                radius: 9,
                fillColor: village.color,
                color: "#ffffff",
                weight: 3,
                fillOpacity: 1
            }
        ).addTo(map);

        marker.bindPopup(`

            <div style="min-width:180px">

                <h3>${village.name}</h3>

                <p>
                    📍 ${village.district}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${village.status}
                </p>

            </div>

        `);

    });

}

// ========================================
// HOME PAGE MAP
// ========================================

const homeMapElement =
    document.getElementById("homeGramSetuMap");

if (homeMapElement) {

    const homeMap = L.map("homeGramSetuMap").setView(
        [15.9129, 79.7400],
        7
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(homeMap);


    const villages = [

        {
            name: "Rampur",
            district: "Kurnool",
            lat: 15.8281,
            lng: 78.0373,
            status: "Outreach Due",
            color: "#e5b93f"
        },

        {
            name: "Gopalapuram",
            district: "Kadapa",
            lat: 14.4673,
            lng: 78.8242,
            status: "Covered",
            color: "#45a86b"
        },

        {
            name: "Chinnapuram",
            district: "Anantapur",
            lat: 14.6819,
            lng: 77.6006,
            status: "Not Covered",
            color: "#e04b4b"
        },

        {
            name: "Vijayawada",
            district: "NTR",
            lat: 16.5062,
            lng: 80.6480,
            status: "Covered",
            color: "#45a86b"
        },

        {
            name: "Nellore",
            district: "Nellore",
            lat: 14.4426,
            lng: 79.9865,
            status: "Outreach Due",
            color: "#e5b93f"
        }

    ];


    villages.forEach(village => {

        const marker = L.circleMarker(
            [village.lat, village.lng],
            {
                radius: 8,
                fillColor: village.color,
                color: "#ffffff",
                weight: 3,
                fillOpacity: 1
            }
        ).addTo(homeMap);


        marker.bindPopup(`

            <div style="min-width:160px">

                <h3>${village.name}</h3>

                <p>
                    📍 ${village.district}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${village.status}
                </p>

            </div>

        `);

    });

}