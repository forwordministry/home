  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfIframe');
  const closeModal = document.getElementById('closeModal');

  const projects = document.querySelectorAll('.book');
  projects.forEach(project => {
      project.addEventListener('click', () => {
          const pdfPath = project.getAttribute('data-pdf');
          iframe.src = pdfPath; 
          modal.style.display = 'flex';
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      iframe.src = '';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
          iframe.src = '';
      }
  });