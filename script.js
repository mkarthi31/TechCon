//Function validating the input elements
function validateForm() {
    //Getting the input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var daysAttending = document.querySelectorAll('input[name="daysAttending"]:checked');

    //Ensuring no field is empty
    if (firstName.trim() === '' || lastName.trim() === '' || dob.trim() === '' || email.trim() === '' || phone.trim() === '' || daysAttending.length === 0) {
        alert('All fields are required');
        return false;
    }

    alert('Registration completed successfully!');
    return true;
}

//Function filtering the schedule by day
function filterByDay(day) {
    const table = document.getElementById('scheduleTable');
    const rows = table.getElementsByTagName('tr');

    //Displaying the schedule on order by using the loop
    for (let i = 1; i < rows.length; i++) {
        const currentDay = rows[i].getElementsByTagName('td')[2].textContent.toLowerCase();
        rows[i].style.display = currentDay === day.toLowerCase() ? '' : 'none';
    }
}

//Function displaying the schedule for all days
function showAllDays() {
    const table = document.getElementById('scheduleTable');
    const rows = table.getElementsByTagName('tr');

    
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = '';
    }
}
