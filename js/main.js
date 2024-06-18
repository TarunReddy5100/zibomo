/* Side Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show');
                // change icon
                toggle.classList.toggle('bx-x');
                // add padding to body
                bodypd.classList.toggle('body-pd');
                // add padding to header
                headerpd.classList.toggle('body-pd');
            });
        }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));

    // Your code to run since DOM is loaded and ready
});

/* Terminal Edit Button */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("terminalmodel");
    const closeModal = document.getElementsByClassName("close")[0];
    const editButtons = document.querySelectorAll('.edit');
    const saveChangesButton = document.getElementById('saveChanges');
    let currentRow;

    editButtons.forEach(editButton => {
        editButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            currentRow = editButton.closest('tr');
            const cells = currentRow.querySelectorAll('td');
            document.getElementById('terminalName').value = cells[0].innerText;
            document.getElementById('boxNumber').value = cells[1].innerText;
            document.getElementById('quantity').value = cells[2].innerText;
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveChangesButton.addEventListener('click', () => {
        const terminalName = document.getElementById('terminalName').value;
        const boxNumber = document.getElementById('boxNumber').value;
        const quantity = document.getElementById('quantity').value;
        const cells = currentRow.querySelectorAll('td');
        cells[0].innerText = terminalName;
        cells[1].innerText = boxNumber;
        cells[2].innerText = quantity;
        modal.style.display = "none";
    });
});

/* Franchise edit button */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("franchisemodel");
    const closeModal = document.getElementsByClassName("close")[0];
    const editButtons = document.querySelectorAll('.edit');
    const saveChangesButton = document.getElementById('saveChanges');
    let currentRow;

    editButtons.forEach(editButton => {
        editButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            currentRow = editButton.closest('tr');
            const cells = currentRow.querySelectorAll('td');
            document.getElementById('firstName').value = cells[0].innerText;
            document.getElementById('lastName').value = cells[1].innerText;
            document.getElementById('gender').value = cells[2].innerText;
            document.getElementById('email').value = cells[3].innerText;
            document.getElementById('phone').value = cells[4].innerText;
            document.getElementById('altPhone').value = cells[5].innerText;
            document.getElementById('address').value = cells[6].innerText;
            document.getElementById('city').value = cells[7].innerText;
            document.getElementById('state').value = cells[8].innerText;
            document.getElementById('zipCode').value = cells[9].innerText;
            document.getElementById('assignTerminal').value = cells[10].innerText;
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveChangesButton.addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const altPhone = document.getElementById('altPhone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zipCode').value;
        const assignTerminal = document.getElementById('assignTerminal').value;

        const cells = currentRow.querySelectorAll('td');
        cells[0].innerText = firstName;
        cells[1].innerText = lastName;
        cells[2].innerText = gender;
        cells[3].innerText = email;
        cells[4].innerText = phone;
        cells[5].innerText = altPhone;
        cells[6].innerText = address;
        cells[7].innerText = city;
        cells[8].innerText = state;
        cells[9].innerText = zipCode;
        cells[10].innerText = assignTerminal;

        modal.style.display = "none";
    });
});

/* Vendors Edit button */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("vendorsmodel");
    const closeModal = document.getElementsByClassName("close")[0];
    const editButtons = document.querySelectorAll('.edit');
    const saveChangesButton = document.getElementById('saveChanges');
    let currentRow;

    editButtons.forEach(editButton => {
        editButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            currentRow = editButton.closest('tr');
            const cells = currentRow.querySelectorAll('td');
            document.getElementById('firstName').value = cells[0].innerText;
            document.getElementById('lastName').value = cells[1].innerText;
            document.getElementById('gender').value = cells[2].innerText;
            document.getElementById('email').value = cells[3].innerText;
            document.getElementById('phone').value = cells[4].innerText;
            document.getElementById('altPhone').value = cells[5].innerText;
            document.getElementById('address').value = cells[6].innerText;
            document.getElementById('city').value = cells[7].innerText;
            document.getElementById('state').value = cells[8].innerText;
            document.getElementById('zipCode').value = cells[9].innerText;
            document.getElementById('items').value = cells[10].innerText;
            document.getElementById('assignTerminal').value = cells[11].innerText;
            document.getElementById('assignbox').value = cells[12].innerText;
            document.getElementById('noofboxes').value = cells[13].innerText;
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveChangesButton.addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const altPhone = document.getElementById('altPhone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zipCode').value;
        const items = document.getElementById('items').value;
        const assignTerminal = document.getElementById('assignTerminal').value;
        const assignbox = document.getElementById('assignbox').value;
        const noofboxes = document.getElementById('noofboxes').value;

        const cells = currentRow.querySelectorAll('td');
        cells[0].innerText = firstName;
        cells[1].innerText = lastName;
        cells[2].innerText = gender;
        cells[3].innerText = email;
        cells[4].innerText = phone;
        cells[5].innerText = altPhone;
        cells[6].innerText = address;
        cells[7].innerText = city;
        cells[8].innerText = state;
        cells[9].innerText = zipCode;
        cells[10].innerText = items;
        cells[11].innerText = assignTerminal;
        cells[12].innerText = assignbox;
        cells[13].innerText = noofboxes;

        modal.style.display = "none";
    });
});

/* Table Search */
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}
/* Search on Clicking enter */
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchTable();
    }
});

