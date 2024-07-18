const handleMenuOpen = () => {
		
		
    const element = document.getElementById("mobilemenu")
   
    element.classList.toggle("hidden");

  };



  const handleMenuClose = () => {
		
		
    const element = document.getElementById("mobilemenu")
   
    element.classList.toggle("hidden");

  };
  document.addEventListener('astro:page-load', () => {
    document.getElementById("close-menu").addEventListener("click", handleMenuClose);
    document.getElementById("hamburger").addEventListener("click", handleMenuOpen);
  })

  

  



