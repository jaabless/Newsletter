function validateAndSubmit(event) {
      event.preventDefault();
      const form = document.getElementById('subscriptionForm');
      const emailInput = document.getElementById('email');
      const errorMessage = document.querySelector('.error-message');
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Email is required';
      } else if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
      } else {
        emailInput.classList.remove('error');
        // Redirect to confirmation page
        window.location.href = 'confirmation.html';
        // emailInput.classList.remove('error');
        // errorMessage.textContent = '';
        // form.style.display = 'none'; // Hide form
        // document.querySelector('.confirmation-card').style.display = 'block'; // Show confirmation
      }
    }

    // function dismissMessage() {
    //   document.querySelector('.confirmation-card').style.display = 'none';
    //   document.getElementById('subscriptionForm').style.display = 'block';
    //   document.getElementById('email').value = ''; // Clear input
    // }

    // Real-time validation
    document.getElementById('email').addEventListener('input', function() {
      const emailInput = this;
      const errorMessage = document.querySelector('.error-message');
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Email is required';
      } else if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
      } else {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
      }
    });

    // Check if the background image loaded successfully
    const illustration = document.querySelector('.illustration');
    const img = new Image();
    img.src = 'assets/images/illustration-sign-up-desktop.svg';
    img.onload = () => {
      console.log('Image loaded successfully');
    };
    img.onerror = () => {
      console.error('Failed to load image at assets/images/illustration-sign-up-desktop.svg');
      illustration.style.background = 'none';
      illustration.querySelector('::after').style.display = 'block';
    };

    function validateEmail() {
      const emailInput = document.getElementById('email');
      const email = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
        // Redirect to confirmation page
        window.location.href = 'confirmation.html';
      }
    }

    function dismissMessage() {
      window.location.href = 'index.html';
    }
    function backMessage() {
      window.location.href = 'index.html';
    }