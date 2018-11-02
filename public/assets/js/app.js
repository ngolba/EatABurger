$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#burgerForm').submit((e) => {
    let newBurger = {
        burger_name: $('#burgerInput').val(),
        devoured: 0
    }
    
    e.preventDefault()
    $.ajax('/api/burgers', {
        method: 'POST',
        data: newBurger
    }).then((response) => {
        $('#burgerInput').val('')
        location.reload()
    })
})

$('.devourBtn').click(() => {

})