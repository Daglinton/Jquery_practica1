$('document').ready( function(){
getTutorials();

$('#newTutBtn').click( ()=>{
$('#newForm').toggle();

})

function getTutorials(){
    $('#tutorialsBody').html('');
    $.ajax({
        url:'http://localhost:3000/api/tutorials',
        method:'get',
        dataType:'json',
        data:{
            test:'tes data'
        },
        success: (data)=>{
            $(data).each( (i,tutorial)=>{
                $('#tutorialsBody').append( $("<tr>")
                .append($("<td>").append(tutorial.tutorialNumber))
                .append($("<td>").append(tutorial.title))
                .append($("<td>").append(tutorial.author))
                .append($("<td>").append(tutorial.type))
                .append($("<td>").append(tutorial._id))
                .append($("<td>").append(` <i class="far fa-edit editTut" data-tutid="`+tutorial._id+`"></i>
                                           <i class="far fa-tranh deleteTut" data-tutid="`+tutorial._id+`"></i>
                `)));
            })
        }

    })
 }
 $('#submitTutorial').click( (e)=>{

 }) 
})