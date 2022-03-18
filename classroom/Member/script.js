(function(document){
    var div = document.getElementById('trang_teacher');
    var icon = document.getElementById('icon_trang_teacher');
    var card = document.getElementById('show_teachertrang');
    var open = false;
    
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fas fa-chevron-down';
        card.className = 'grid grid-cols-2 gap-x-2 card';
      } else{
        icon.className = 'fas fa-chevron-down open';
        card.className = 'grid grid-cols-2 gap-x-2 card open';
      }
      
      open = !open;
    });
  })(document);

  (function(document){
    var div = document.getElementById('apple_teacher');
    var icon = document.getElementById('icon_apple_teacher');
    var card = document.getElementById('show_teacherapple');
    var open = false;
    
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fas fa-chevron-down';
        card.className = 'grid grid-cols-2 gap-x-2 card';
      } else{
        icon.className = 'fas fa-chevron-down open';
        card.className = 'grid grid-cols-2 gap-x-2 card open';
      }
      
      open = !open;
    });
  })(document);