var calendar = new Calendar(calendarE1, {
    eventSources: [
      {
        id : 'myAutoloan',
        Amount : 100.00,
        Deadline : '2024-04-26T22:30:00',
        Categories : 'CarLoan',
        OptimalDate : '2024-04-25T12:00:00',  
      },
      {
        id : 'Sallie Mae',
        Amount : 200.00,
        Deadline : '2024-04-20T15:00:00',
        Categories : 'StudentLoan',
        OptimalDate : '2024-04-25T12:00:00',
      },
      {
        id : 'Discover',
        Amount : 500.00,
        Deadline : '2024-04-27T12:00:00',
        Categories : 'Credit',
        OptimalDate : '2024-04-25T12:00:00',
      },
      {
        id : 'BofA',
        Amount : 1000.00,
        Deadline : '2024-04-28T11:59:00',
        Categories : 'Savings',
        OptimalDate : '2024-04-25T12:00:00',
      },
    ],
    backgroundColor: 'red',
    textColor: 'white'
});
  
