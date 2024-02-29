document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
    displayReservations(); // Asegurarse de que se muestren las reservas al cargar la página
});

function fetchWeatherData() {
    const apiKey = '6b9ab73d6e8a1f4dbd8b3a0a0572e65e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Guadalajara,MX&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayWeatherData(data);
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));
}

function displayWeatherData(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    if (data.main && data.weather && data.sys && data.name) {
        const iconCode = data.weather[0].icon;
        const iconUrl = `icons/${iconCode}.png`;

        // Usar el mapeo para obtener una descripción personalizada si existe
        let weatherDescription = data.weather[0].description;
        weatherDescription = weatherDescriptionMap[weatherDescription.toLowerCase()] || weatherDescription;

        weatherInfoDiv.innerHTML = `
            <div class="weather-content">
                <div class="weather-data">
                    <h3>Clima en ${data.name}, ${data.sys.country}</h3>
                    <p>Temperatura: ${data.main.temp} °C</p>
                    <p>Estado: ${weatherDescription}</p>
                    <p>Humedad: ${data.main.humidity}%</p>
                    <p>Viento: ${data.wind.speed} m/s</p>
                    <p>Presión: ${data.main.pressure} hPa</p>
                </div>
                <div class="weather-icon">
                    <img src="${iconUrl}" alt="Clima" style="width:100px;height:auto;">
                </div>
            </div>
        `;
    } else {
        weatherInfoDiv.innerHTML = '<p>No se pudo obtener la información del clima.</p>';
    }
}

const weatherDescriptionMap = {
    'muy nuboso': 'Mayormente nublado',
    'cielo claro': 'Cielo claro',
    // Agrega más mapeos según sea necesario
};

let reservations = [
    
];

function displayReservations() {
    const reservationList = document.getElementById('reservation-list');
    reservationList.innerHTML = ''; // Limpiar lista actual para evitar duplicados

    reservations.forEach(reservation => {
        const formattedDate = formatDate(reservation.date); // Formatea cada fecha de reserva
        const listItem = document.createElement('li');
        listItem.innerHTML = `Fecha: ${formattedDate}, Huéspedes: ${reservation.guests}`;

        reservationList.appendChild(listItem);
    });
}

// Función para formatear la fecha de "aaaa-mm-dd" a "dd/mm/aaaa"
function formatDate(inputDate) {
    const splitDate = inputDate.split('-'); // Espera [aaaa, mm, dd]
    if(splitDate.length === 3) {
        return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`; // Convierte a dd/mm/aaaa
    } else {
        return inputDate; // Devuelve la entrada si no cumple el formato esperado
    }
}

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de página

    // Obtiene los valores de los campos del formulario
    const dateInput = document.getElementById('date');
    const guestsInput = document.getElementById('guests');
    const rawDate = dateInput.value;
    const guests = parseInt(guestsInput.value, 10); // Asegúrate de convertir el valor a un número

    // Obtiene la fecha actual en formato aaaa-mm-dd
    const today = new Date().toISOString().split('T')[0];

    // Valida que la fecha seleccionada no esté en el pasado
    if (rawDate < today) {
        alert('Por favor, selecciona una fecha futura.');
        return; // Detiene la ejecución de la función si la fecha no es válida
    }

    // Valida que el número de huéspedes esté dentro del rango permitido
    if (guests < 1 || guests > 4) {
        alert('El número de huéspedes debe ser entre 1 y 4.');
        return; // Detiene la ejecución de la función si el número de huéspedes no es válido
    }


   // Verificar si la fecha ya está reservada
   const formattedDate = formatDate(rawDate); // Asegúrate de formatear la fecha para comparar en el formato deseado
   const isDateTaken = reservations.some(reservation => reservation.date === formattedDate);

   if (isDateTaken) {
       alert('Esta fecha ya está reservada. Por favor, elige otra fecha.');
       return;
   }

   // Si pasa todas las validaciones, agrega la nueva reserva
   reservations.push({ date: formattedDate, guests: guests });
   displayReservations();
        
        // Limpia los campos del formulario después de agregar la reserva
        dateInput.value = "";
        guestsInput.value = "";
        
        alert('Reserva realizada con éxito.');
    });


document.addEventListener('DOMContentLoaded', function() {
    displayReservations();
});









