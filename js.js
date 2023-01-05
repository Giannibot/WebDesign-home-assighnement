
 const buttons = document.querySelectorAll('button');
  const loginButton = document.querySelector('.login1.login2');
  const registerButton = document.querySelector('.createAccount1.createAccount2');
  const form = document.querySelector('.register');
          
  buttons.forEach(button => {
    const imageUrl = button.getAttribute('data-image');
    if (imageUrl) {
      button.addEventListener('click', () => {
        const windowFeatures = 'height=400,width=600';
        window.open(imageUrl, 'Image', windowFeatures);
      });
    }
  });

  loginButton.addEventListener('click', loginAlert);
  registerButton.addEventListener('click', toggleForm);

  function loginAlert() {
    alert("You are already logged in");
  }

  function toggleForm() {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }

  const registerButton1 = document.querySelector('#register-button');
  const createAccButton = document.querySelector('#createAcc-button');
  const form1 = document.querySelector('.register');

  registerButton1.addEventListener('click', toggleForm);
  createAccButton.addEventListener('click', toggleForm);

  function toggleForm() {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }
  
  $('.register').validate({
    rules: {
      name: {
        required: true,
        lettersonly: true
      },
      surname: {
        required: true,
        lettersonly: true
      },
      phone: {
        required: true,
        digits: true
      },
      email: {
        required: true,
        email: true
      }
    }
  });

  {this will do nothing test}
          
            