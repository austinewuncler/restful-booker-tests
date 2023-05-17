pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
  const responseBody = pm.response.json();

  pm.expect(responseBody.bookingdates.checkout).to.eql(
    pm.collectionVariables.get('new_checkout')
  );
  pm.expect(responseBody.additionalneeds).to.eql(
    pm.collectionVariables.get('new_additional_needs')
  );
});
