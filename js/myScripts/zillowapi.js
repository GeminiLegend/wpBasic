$('#propertyForm').on('submit', getZip);

		$('#zillow').on('submit',getLocationInfo )

		var zillow = $('#zillowsubmit').click(function(){

function getLocationInfo(evt){
	var zipLength = $("#zipcode").val().length;
	var zwsid = 'X1-ZWz1bjj5gs9yx7_1zmzq';
	var address = $('#address');
	var zip = $('#zipcode');
	var city = $('#city');
	var state = $('#state')
	$.ajax({
		type:'GET',
		url: 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?' + zwsid + address.val() + zip.val() + city.val() + state.val(),
		dataType: 'json',
		success: populateZillowForm
	});
}

function populateZillowForm (response) {
	var result = response['results']['result'];
	
	$('.hidden').css('visibility','visible');
	$('zpid').val(response['zpid']);
	$('yearbuilt').val(response['yearBuilt']);
	$('lotsize').val(response['lotSizeSqFt']);
	$('sqft').val(response['finishedSqFt']);
	$('bathrooms').val(response['bathrooms']);
	$('bedrooms').val(response['bedrooms']);
	$('lastsold').val(response['lastSoldDate']);
	$('price').val(response['lastSoldPrice']);
}