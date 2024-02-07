import React from 'react';

class EventCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
  }

  componentDidMount() {
    setTimeout( () => {
    // $(this.calendarRef.current).fullCalendar({
    //     header: {
    //       center: 'basicDay,basicWeek,month',
    //       left: 'title',
    //       right: 'prev,next',
    //     },
    //     fixedWeekCount: false,
    //     navLinks: true, // can click day/week names to navigate views
    //     editable: true,
    //     eventLimit: true, // allow "more" link when too many events
    //     aspectRatio: 1.8,
    //     events: [{
    //         title: 'All Day Event',
    //         start: '2019-11-19'
    //       },

    //       {
    //         title: 'Meeting',
    //         start: '2019-11-20T14:30:00'
    //       },
    //       {
    //         title: 'Happy Hour',
    //         start: '2019-11-21T17:30:00'
    //       },
    //       {
    //         title: 'Birthday Party',
    //         start: '2019-11-20T07:00:00'
    //       }
    //     ]
    // });
    }, 400);
  }

  render() {
    return (
      <div className="card dashboard-card-four pd-b-20">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Event Calender</h3>
            </div>
            <div className="dropdown">
              <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                aria-expanded="false">...</a>

              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i
                    className="fas fa-times text-orange-red"></i>Close</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
              </div>
            </div>
          </div>
          <div className="calender-wrap">
            <div id="fc-calender" className="fc-calender" ref={this.calendarRef}/>
          </div>
        </div>
      </div>
    )
  }
}

export default EventCalendar;
