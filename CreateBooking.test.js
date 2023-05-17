pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
  const responseBody = pm.response.json();

  pm.expect(responseBody.booking.firstname).to.eql(
    pm.collectionVariables.get('firstName')
  );
  pm.expect(responseBody.booking.lastname).to.eql(
    pm.collectionVariables.get('lastName')
  );

  pm.collectionVariables.set('bookingId', responseBody.bookingid);
});
