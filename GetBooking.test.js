pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
  const responseBody = pm.response.json();

  pm.expect(responseBody.firstname).to.eql(
    pm.collectionVariables.get('firstName')
  );
});
