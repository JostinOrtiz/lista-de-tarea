$(document).ready(function(){
    $('#task-form').on('submit', function(e){
        e.preventDefault();
        var evento = $("#new-task").val();
        if (evento === '') {
            return alert("Ingrese una actidivada a relizar");
        }
        else{
            $('#task-list').prepend('<li>' + evento + '<br>'+'<br>'+
            '<button id="echo" class="btn btn-outline-success">REALIZADO</button>' +'<br>'+'<br>'+  
            '<button id="no_echo" class="btn btn-outline-danger">NO REALIZADO</button>' + '</li>');
            $('#new-task').val('');
        };
    });
    $('#task-list').on('click', '#echo',function(){
        $(this).parent().addClass('strikethrough');
    });
    $('#task-list').on('click', '#no_echo', function(){
        $(this).parent().removeClass('strikethrough');
    });
});