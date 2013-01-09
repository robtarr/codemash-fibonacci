describe 'fibonacci calculator', ->

  Given -> 
    affix 'input#index[value=4]'
    affix 'form button.calculate'
    fib.setup()
    spyOn( $, 'post' )

  When -> $( '.calculate' ).trigger 'click'
  Then -> expect( $.post ).toHaveBeenCalledWith '/fibonacci', {index: 4}, fib.fibResponse

  Given -> 
    affix 'span.result'

  When -> fib.fibResponse 13
  Then -> expect( $( ".result" ).text()).toEqual( '13' )