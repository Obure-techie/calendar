let userData = {
    June: {
        id: "",
        name: "",
        phoneNumber: "",
        meterNumber: "",
        waterConsumption: ""
    }
};

document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    userData.June.id = document.getElementById('idNumber').value;
    userData.June.name = document.getElementById('name').value;
    userData.June.phoneNumber = document.getElementById('phoneNumber').value;
    userData.June.meterNumber = document.getElementById('meterNumber').value;
    userData.June.waterConsumption = document.getElementById('waterConsumption').value;

    console.log(userData);
});