// Fungsi untuk mengecek ketersediaan localStorage
function isLocalStorageAvailable() {
  try {
    const test = "test"
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

// Fungsi untuk validasi waktu
function isValidTimestamp(timestamp) {
  return !isNaN(timestamp) && timestamp > 0
}

// Fungsi untuk mengatur waktu target
function setTargetTime() {
  const now = new Date()
  const targetTime = new Date(now)
  targetTime.setHours(now.getHours() + 6)
  return targetTime.getTime()
}

// Inisialisasi waktu target
let launchDate
try {
  if (isLocalStorageAvailable()) {
    const savedTime = localStorage.getItem("launchTime")
    if (savedTime && isValidTimestamp(parseInt(savedTime))) {
      launchDate = parseInt(savedTime)
    } else {
      launchDate = setTargetTime()
      localStorage.setItem("launchTime", launchDate.toString())
    }
  } else {
    launchDate = setTargetTime()
  }
} catch (error) {
  console.error("Error setting target time:", error)
  launchDate = setTargetTime()
}

console.log("Waktu sekarang:", new Date())
console.log("Waktu target:", new Date(launchDate))

function updateCountdown() {
  try {
    const currentTime = new Date().getTime()
    const timeRemaining = launchDate - currentTime

    // Hitung waktu
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    // Update tampilan dengan pengecekan elemen
    const elements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    }

    // Validasi semua elemen ada
    if (Object.values(elements).every((el) => el !== null)) {
      elements.days.textContent = days.toString().padStart(2, "0")
      elements.hours.textContent = hours.toString().padStart(2, "0")
      elements.minutes.textContent = minutes.toString().padStart(2, "0")
      elements.seconds.textContent = seconds.toString().padStart(2, "0")
    } else {
      throw new Error("Satu atau lebih elemen countdown tidak ditemukan")
    }

    // Jika waktu habis
    if (timeRemaining < 0) {
      clearInterval(countdownInterval)
      if (isLocalStorageAvailable()) {
        localStorage.removeItem("launchTime")
      }
      if (Object.values(elements).every((el) => el !== null)) {
        elements.days.textContent = "00"
        elements.hours.textContent = "00"
        elements.minutes.textContent = "00"
        elements.seconds.textContent = "00"
      }
    }
  } catch (error) {
    console.error("Error dalam updateCountdown:", error)
    clearInterval(countdownInterval)
  }
}

// Pastikan DOM sudah siap sebelum menjalankan script
document.addEventListener("DOMContentLoaded", () => {
  // Update setiap detik
  const countdownInterval = setInterval(updateCountdown, 1000)

  // Update pertama kali
  updateCountdown()
})
