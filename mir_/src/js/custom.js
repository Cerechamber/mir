const actions = () => {
  const searchButton = document.querySelector('.middle-header__search-btn');
  const formSearch = document.querySelector('.middle-header__search-form');
  formSearch.style.display = 'none';
  const left = document.querySelector('.middle-header__left');
  const closeSearch = document.querySelector('.middle-header__search-close');
  closeSearch.style.display = 'none';

  searchButton.addEventListener('click', function(){
     formSearch.style.display = 'block';
     left.style.opacity = '0';
     this.style.display = 'none';
     closeSearch.style.display = 'block';
  });

   closeSearch.addEventListener('click', function(){
     	formSearch.style.display = 'none';
  		left.style.opacity = '1';
        this.style.display = 'none';
        searchButton.style.display = 'block';
  });
}

export default actions;