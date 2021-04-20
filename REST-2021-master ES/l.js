$(document).ready(function() {
    var datiDaInviare = {
		id: 1699,
		name: "Giacomo",
		surname: "Leopardi",
		sidi_code: "174439201092",
		tax_code: "Giacomo_Leopardi",
	};

    $.ajax({
        url: 'http://localhost/TPSIT/api/studenti/',
        type: 'put',
        contentType: 'application/json',
        accept: "*/*",
        data: JSON.stringify(datiDaInviare),
        success: function(data, textStatus, jQxhr) {
            console.log(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });
});