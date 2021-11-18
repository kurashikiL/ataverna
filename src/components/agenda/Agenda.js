import { Calendar, momentLocalizer  } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

     // or globalizeLocalizer
const Agenda = props => {
    const myEventsList = [
        { start: new Date(2021,10,19,18,0,0), end: new Date(2021,10,19,22,0,0), title: "Catarro do cutulu" },
        { start: new Date(2021,10,20,18,0,0), end: new Date(2021,10,20,22,0,0), title: "Cavernas dos anões" },
        { start: new Date(2021,10,21,18,0,0), end: new Date(2021,10,21,22,0,0), title: "O mundo de Gordeus" }
      ]; 
    const localizer = momentLocalizer(moment);
    return(
        <Calendar localizer={localizer}
        events={myEventsList}
        views={{
            month: true,
            week: true,
          }}/>
    )
}
export default Agenda;