function getRecords() {
    var body = {
      app: 1
    };
  
    // Kintone REST API Request calling the Kintone Get Record API
    kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body, function(success) {
      // The function called on success
      var records = success.records;
      var recordSize = records.length + 1;
      window.alert('There are now currently ' + recordSize + ' records in this App.');
    }, function(error) {
      // The function called on error
      var errormsg = 'There was an error when retrieving the data.';
      window.alert(errormsg);
    });
  }
  
  kintone.events.on('app.record.create.submit', getRecords);