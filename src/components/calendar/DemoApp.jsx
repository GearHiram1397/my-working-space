import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import {db} from '../todo-component/firebase'
// import {doc, updateDoc, deleteDoc} from 'firebase/firestore'
// import { collection, orderBy , onSnapshot, query, addDoc, serverTimestamp } from 'firebase/firestore'
//import styled from 'styled-components'


export default class DemoApp extends React.Component {

  
  state = {
    weekendsVisible: true,
    currentEvents: [],
    initializeEvent: [],
    docRef: ''
  }

  // docRef = {
  //   document: doc(db, 'calendar', 'events', this.initialEvents.title) }
  // // const [editedTodo, setEditedTodo] = useState(todo.title)
  // // template literal
  
  // componentDidMount(){
  //     const  eventListQuery = query(
  //         collection(db, 'calendar', 'events'), 
  //         orderBy("createdAt", 'desc')
  //     )

  //    const  unsub = onSnapshot( eventListQuery, querySnapshot => {
  //             const eventItems = []

  //             querySnapshot.forEach(doc => {
  //                 eventItems.push({
  //                     ...doc.data(),
  //                     id: doc.id,

  //                 })
  //             })

  //           this.setState({
  //              ...this.state,
  //              initializeEvent: eventItems
  //            })
             
  //         }
  //     )
  //    return unsub
  // }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
         
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = async (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    //const  collectionRef =  collection(db, 'calendar', 'events') 
    calendarApi.unselect() // clear date selection

    if (title) {
    //   await addDoc(collectionRef, {
    //     title: title, 
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //     createdAt: serverTimestamp()
    // })
    calendarApi.addEvent({
      id: createEventId(),
      title, 
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
     // createdAt: serverTimestamp()
    })

    }

  
  }

  handleEventClick = async (clickInfo) => {
    if (prompt(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      //await deleteDoc(this.docRef.document)
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  } 

}

function renderEventContent(eventInfo) {
  return (
    <div style={{backgroundColor:'#2966a2', width: '100%'}}>
      <b style={{color:'orange'}}>{eventInfo.timeText}</b>
      <i style={{marginLeft: '5px'}} >{eventInfo.event.title}</i>
    </div>
  )
}

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }

/* <CalendarTitle>Calendar 📅</CalendarTitle>

const CalendarTitle = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  align-items: flex-start;
  font-weight: 700;
  color: '#1a252f';` */