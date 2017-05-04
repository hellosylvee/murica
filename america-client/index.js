$(document).ready(function(){
  // console.log("Hey wassup son!")
  const url = 'http://localhost:3000/api/v1/cities'



  $.ajax({
    url: url,
    method: 'GET',
    success: function(data){
      data.forEach(function(city){
        $('#success').append(`
         <div>${city.name}</div>
        `)
      })
    }
  })
  $('#submit').on('click', function(event){
    // console.log("How's it going")
    event.preventDefault();
    // console.log("Why isn't this working?")
    const stateName = $('input#state-name').val()
    const cityName = $('input#city-name').val()

    // const stateName = $stateNameInput.val()
    // const cityName = $cityNameInput.val()

    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/cities',
      data: {
        state_name: stateName,
        city_name: cityName
      } //:state_name is from params, stateName is the input value
     }).then(function(data) {
       console.log(data)
       $('#success').append(`
        <div>${data.name}</div>
         `)

    }); //line 22
    console.log("is this making a call?")
  }); //line 3
}) //line 1
