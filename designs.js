// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let form = $('#sizePicker');
let submit = form.children('2');

$('#submit').on('click', function(e){

    e.preventDefault();

    $(this).toggleClass('active');

    let color = $('#colorPicker').val();
    color = "background:" + color;
    
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();

    let table = document.getElementById('pixelCanvas');
    
    if(table.rows.length === 0){

        for(let i=1; i<=height; i++){

            let tableRow = document.createElement('tr');

            for(let j=1; j<=width; j++){

                let tableCol = document.createElement('td');
                tableRow.appendChild(tableCol); 

            }

            table.appendChild(tableRow);
        }
    }
    else{

        $(this).unbind('click').click();
    }

    $('td').addClass('color');

    $('td').click(function(){
        $(this).toggleClass('color');
        $(this).attr('style', color);           
    });
});

// // Your code goes here!

