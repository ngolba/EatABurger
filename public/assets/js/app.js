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
        method: 'PUT',
        data: newBurger
    }).then((response) => {
        $('#burgerInput').val('')
        location.reload()
    })
})

$('.devourBtn').click(() => {
    let burgerDevoured = {id: $(event.currentTarget).attr('id')}
    $.ajax('/api/burgers', {
        method: 'POST',
        data: burgerDevoured
    }).then((response)  => {
        location.reload()
    })
})