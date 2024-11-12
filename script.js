function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // '0' should be '12' for midnight
  hours = String(hours).padStart(2, '0');

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('ampm').textContent = ampm;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Initial call to set time immediately
updateTime();
