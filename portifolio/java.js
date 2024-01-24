function scrollToPercentage(percentage) {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  
    const targetPosition = Math.floor((scrollHeight - windowHeight) * (percentage / 100));
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }