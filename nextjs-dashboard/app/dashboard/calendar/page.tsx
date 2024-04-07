'use client';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';


export default function Page() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        events = {
          [
            {
              id: 'Chase Sapphire ',
              title: 'Credit',
              start: '2024-05-01T11:59:00',
              end: '2024-05-01T11:59:00'
            },
            {
              id: 'Discover it Student',
              title: 'Credit',
              start: '2024-05-06T11:59:00',
              end: '2024-05-06T11:59:00'
            },
            {
              id: 'Costco Anywhere Visa',
              title: 'Credit',
              start: '2024-05-07T11:59:00',
              end: '2024-05-07T11:59:00'
            },
            {
              id: 'Mission Lane Visa',
              title: 'Credit',
              start: '2024-05-08T11:59:00',
              end: '2024-05-08T11:59:00'
            },
            {
              id: 'OpenSky Secured Visa',
              title: 'Credit',
              start: '2024-05-09T11:59:00',
              end: '2024-05-09T11:59:00'
            },
            {
              id: 'Indigo Mastercard',
              title: 'Credit',
              start: '2024-05-10T11:59:00',
              end: '2024-05-10T11:59:00'
            },
            {
              id: 'Apple Card',
              title: 'Credit',
              start: '2024-05-11T11:59:00',
              end: '2024-05-11T11:59:00'
            },
            {
              id: 'Amazon Business American Express Card',
              title: 'Credit',
              start: '2024-05-12T11:59:00',
              end: '2024-05-12T11:59:00'
            },
            {
              id: 'Marriott Bonvoy Boundless',
              title: 'Credit',
              start: '2024-05-13T11:59:00',
              end: '2024-05-13T11:59:00'
            },
            {
              id: 'Chase Freedom Unlimited',
              title: 'Credit',
              start: '2024-05-05T11:59:00',
              end: '2024-05-05T11:59:00'
            },
            {
              id: 'Chase Sapphire Reserve',
              title: 'Credit',
              start: '2024-05-04T11:59:00',
              end: '2024-05-04T11:59:00'
            },
            {
              id: 'myAutoloan',
              title: 'CarLoan',
              start: '2024-04-30T22:30:00',
              end: '2024-04-30T22:30:00'
            },
            {
              id: 'Sallie Mae Student Loan',
              title: 'StudentLoan',
              start: '2024-04-19T15:00:00',
              end: '2024-04-19T15:00:00'
            },
            {
              id: 'Discover Unlimited',
              title: 'Credit',
              start: '2024-04-26T12:00:00',
              end: '2024-04-26T12:00:00'
            }
          ]
        }
      />
    </div>
  );
}