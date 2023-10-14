import React from "react"

export const BookingList = (props) => {

    const sortEventsByDate = (events) => {
        return events.sort((a, b) => a.start - b.start);
      };
      
    return (
        <ul style={{display: props.eventList ? "block" : "none"}}  className='booking__list'>
            <h2 className='booking__list__title section__title '>REZERWACJE</h2>
            <div className='container'>
            {sortEventsByDate(props.myEvents).map((element) => {
                return (
                    <li className='list__element' key={element.id}>Od {element.start.getDate()}/{element.start.getMonth() + 1}/{element.start.getFullYear()} do {element.end.getDate()}/{element.end.getMonth() + 1}/{element.end.getFullYear()} 
                    <span className='list__element--guest'>Goście: <strong>{element.guests} </strong></span>
                    <span className='list__element--price'> Cena za dobę: <strong>{element.price} zł </strong>
                    </span><span className='list__element--advance'>Zaliczka: <strong>{element.advance} zł</strong></span>
                    </li>
                )})}
            </div>
          </ul>
    )
}