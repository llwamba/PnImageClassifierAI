$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formData = new FormData($('form')[0]);
        $.ajax({
            url: '/predict',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                $('#result').html('Prediction: ' + '<strong>' +response.label + '</strong>' + '<br>Probability of Pneumonia is: ' 
                + '<strong>' + response.prediction.toFixed(7) + '</strong>' + ' or ' + '<strong>' + response.prediction_percent.toFixed(3) + '%' + '</strong>');
            },
            error: function(xhr, status, error) {
                // Show an error message
                alert('Error: ' + error);
            }
        });
    });

    // event listener to clear result
    $('#clear').on('click', function() {
        $('#result').html('');
    });
});
