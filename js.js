
            const buttons = document.querySelectorAll('button');
          
            buttons.forEach(button => {
              button.addEventListener('click', () => {
                const imageUrl = button.getAttribute('data-image');
                const windowFeatures = 'height=400,width=600';
                window.open(imageUrl, 'Image', windowFeatures);
              });
            });
          
            