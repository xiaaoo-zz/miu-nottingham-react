import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' // to connect two hoc 
import styles from './EventDetail.module.scss'
import { Icon } from 'components'
import duck_svg from 'assets/duck.svg'


function EventDetail(props) {
  const { event } = props
  

  if (event) {
    console.log(props);
    return (
      <div className={styles.Container}>

        <section className={styles.Img}>
          <div className={styles.heading}>
            <p>{props.event.info.title}</p>
          </div>
          <img src={props.event.info.imageURL} alt='event'/>
          <button>
            <Icon src={duck_svg} alt='duck'/>
          </button>
          <div className={styles.Host}>
            <div></div>
            <p>Hosted by</p>
            <a href='#'>{props.event.authorFirstName}</a>
          </div>
        </section>
        <section className={styles.Overview}>
          <h3>Overview</h3>
          <p>{props.event.info.brief}</p>
        </section>

        <section className={styles.Comments}>

        </section>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading event...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null
  return { 
    event,
    userId: state.firebase.auth.isEmpty ? null : state.firebase.auth.uid,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'events' }
  ])
)(EventDetail)
