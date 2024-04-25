// Mengambil elemen DOM
const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const inputKalkulasi = document.getElementById('kalkulasi');
const tombolKonversi = document.querySelector('.btn button:nth-child(1)');
const tombolReset = document.querySelector('.btn button:nth-child(2)');
const tombolReverse = document.querySelector('.btn button:nth-child(3)');

// Fungsi untuk mengonversi Celsius ke Fahrenheit
function celsiusKeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fungsi untuk mengonversi Fahrenheit ke Celsius
function fahrenheitKeCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event listener untuk tombol konversi
tombolKonversi.addEventListener('click', () => {
    if (inputCelsius.value !== '' || inputFahrenheit.value !== '') {
        if (inputCelsius.value !== '') {
            const celsius = parseFloat(inputCelsius.value);
            const fahrenheit = celsiusKeFahrenheit(celsius);
            inputFahrenheit.value = fahrenheit.toFixed(2);
            inputKalkulasi.value = `${celsius}°C ke Fahrenheit: (${celsius} × 9/5) + 32 = ${fahrenheit}°F`;
        } else if (inputFahrenheit.value !== '') {
            const fahrenheit = parseFloat(inputFahrenheit.value);
            const celsius = fahrenheitKeCelsius(fahrenheit);
            inputCelsius.value = celsius.toFixed(2);
            inputKalkulasi.value = `Fahrenheit ke ${celsius}°C: (${fahrenheit} - 32) × 5/9 = ${celsius}°C`;
        }
    } else {
        alert("Masukkan nilai suhu terlebih dahulu!");
    }
});


// Event listener untuk tombol reset
tombolReset.addEventListener('click', () => {
    inputCelsius.value = '';
    inputFahrenheit.value = '';
    inputKalkulasi.value = '';
});

// Event listener untuk tombol balik
tombolReverse.addEventListener('click', () => {
    const temp = inputCelsius.value;
    inputCelsius.value = inputFahrenheit.value;
    inputFahrenheit.value = temp;
});
