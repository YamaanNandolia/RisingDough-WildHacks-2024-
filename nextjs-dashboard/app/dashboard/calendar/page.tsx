'use client';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
const calendarData = require('../../../pages/api/calendarInput.js')


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
        events={calendarData}
      />
    </div>
  );
}