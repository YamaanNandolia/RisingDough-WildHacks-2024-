'use client';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';


export default function Page() {
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
        events = {[
          {
            id: 'myAutoloan',
            title: 'CarLoan',
            start: '2024-04-29T12:00:00',
            end: '2024-04-29T12:00:00',
          },
          {
            id: 'Sallie Mae',
            title: 'StudentLoan',
            start: '2024-04-29T12:00:00',
            end: '2024-04-29T12:30:00',
          },
          {
            id: 'Discover',
            title: 'Credit',
            start: '2024-04-15T12:00:00',
            end: '2024-04-15T12:00:00',
          },
          {
            id: 'BofA',
            title: 'Savings',
            start: '2024-04-15T12:00:00',
            end: '2024-04-15T12:00:00',
          }
        ]}
      />
    </div>
  );
}