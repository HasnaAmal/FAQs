
  const questions = document.querySelectorAll('.faqs > div');

  questions.forEach((question) => {
    const header = question.querySelector('div');
    const paragraph = question.querySelector('p');

    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');

      // كنسدو جميع الأسئلة الأخرى
      questions.forEach((q) => {
        const qHeader = q.querySelector('div');
        const qParagraph = q.querySelector('p');

        if (qParagraph) qParagraph.style.display = 'none';
        if (qHeader) {
          qHeader.classList.remove('active');
          qHeader.classList.add('closed');
          const sign = qHeader.querySelector('div');
          if (sign) sign.textContent = '+';
        }
      });

      // إلا كان هذا مفتوح، نسدو
      if (isActive) {
        if (paragraph) paragraph.style.display = 'none';
        header.classList.remove('active');
        header.classList.add('closed');
        const sign = header.querySelector('div');
        if (sign) sign.textContent = '+';
      } else {
        // إلا ماكانش مفتوح، نفتح و نبدل الإشارة
        if (paragraph) paragraph.style.display = 'block';
        header.classList.add('active');
        header.classList.remove('closed');
        const sign = header.querySelector('div');
        if (sign) sign.textContent = '−';
      }
    });
  });

