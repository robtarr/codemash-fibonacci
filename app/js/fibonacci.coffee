$(document).ready ->
  window.fib =
    
    setup: ->
      $( '.calculate' ).on 'click', (e) ->
        e.preventDefault()
        i = parseInt( $( "#index" ).val(), 10 )

        $.post '/fibonacci', {index: i}, fib.fibResponse

    fibResponse: (data) ->
      $( ".result" ).text( data )
      
  fib.setup()