
    function filterMenu(category) {
      var sections = document.querySelectorAll('.menu-section');
     
      sections.forEach(function (section) {
        if (category === 'all' || section.getAttribute('data-category') === category) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    }


    document.querySelector('#infoContact .bi-x').addEventListener('click', function () {
  document.getElementById('booking-section').classList.add('d-none');
  document.getElementById('infoContact').classList.add('d-none');
});

document.querySelector('#booking-section .bi-x').addEventListener('click', function () {
  document.getElementById('booking-section').classList.add('d-none');
});
document.querySelector('#infoContact .bi-arrow-left-short').addEventListener('click', function () {
  document.getElementById('infoContact').classList.add('d-none');
});
    function showSection(sectionId) {
        document.getElementById("menu-section").classList.add("d-none");
      document.getElementById("home-section").classList.add("d-none");
      document.getElementById("gallery-section").classList.add("d-none");
      document.getElementById("contact-section").classList.add("d-none");
   
      document.getElementById(sectionId + "-section").classList.remove("d-none");
    }


    function booking() {
      document.getElementById("booking-section").classList.remove("d-none");
    }
     function infoContact() {
      document.getElementById("infoContact").classList.remove("d-none");
    }
    

    

    const couvertOptions = document.querySelectorAll(".couvert-option");
    const couvertButton = document.getElementById("couverteButton");
    const dateButton = document.getElementById("dateButton");
    const timeButton = document.getElementById("timeButton");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const timeErrorMessage = document.getElementById("timeErrorMessage");

  couvertOptions.forEach(option => {
      option.addEventListener("click", function() {
        const couvertValue = this.getAttribute("data-couvert");
        couvertButton.innerHTML = `<i class="fas fa-utensils"></i> ${couvertValue} Couverte${couvertValue > 1 ? 's' : ''}`;
      });
    });

   dateInput.addEventListener("input", function() {
      const dateValue = new Date(dateInput.value);
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const formattedDate = dateValue.toLocaleDateString('fr-FR', options);
      dateButton.innerHTML = `<i class="fas fa-calendar-alt"></i> ${formattedDate}`;
    });

    document.getElementById("lunchButton").addEventListener("click", function() {
      if (isValidLunchTime(timeInput.value)) {
        const timeValue = timeInput.value ? ` à ${timeInput.value}` : '';
        timeButton.innerHTML = `<i class="fas fa-clock"></i> Lunch${timeValue}`;
        timeErrorMessage.style.display = "none"; 
      } else {
        timeErrorMessage.style.display = "block"; 
      }
    });

    document.getElementById("dinerButton").addEventListener("click", function() {
      if (isValidDinnerTime(timeInput.value)) {
        const timeValue = timeInput.value ? ` à ${timeInput.value}` : '';
        timeButton.innerHTML = `<i class="fas fa-clock"></i> Dinner${timeValue}`;
        timeErrorMessage.style.display = "none"; 
      } else {
        timeErrorMessage.style.display = "block"; 
      }
    });

    function isValidLunchTime(time) {
      if (!time) return false;
      const [hours, minutes] = time.split(":");
      return (hours >= 11 && hours <= 17);
    }

    function isValidDinnerTime(time) {
      if (!time) return false;
      const [hours, minutes] = time.split(":");
      return (hours >= 18 && hours <= 23);
    }

    // Mettre à jour le bouton "Time" en fonction de l'heure choisie
    timeInput.addEventListener("input", function() {
      if (!timeButton.innerHTML.includes('Lunch') && !timeButton.innerHTML.includes('Dinner')) {
        const timeValue = timeInput.value ? ` à ${timeInput.value}` : '';
        timeButton.innerHTML = `<i class="fas fa-clock"></i> Time${timeValue}`;
        timeErrorMessage.style.display = "none";
      }
    });

   