module.exports = {
  createEvent: (req, res) => {
    const {
        id,
        title,
        date,
        startTime,
        endTime,
        location,
        description,
        rsvp,
        img,
      } = req.body,
      db = req.app.get("db");

    db.event
      .add_event(
        id,
        title,
        date,
        startTime,
        endTime,
        location,
        description,
        rsvp,
        img
      )
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).json(err));
  },
  getUserEvent: (req, res) => {
    const { id } = req.params,
      db = req.app.get("db");

    db.event
      .get_user_event(id)
      .then((events) => res.status(200).json(events))
      .catch((err) => res.status(500).json(err));
  },
  deleteEvent: (req, res) => {
    const { id } = req.params,
      db = reg.app.get("db");

    db.event
      .delete_event(id)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).json(err));
  },
  updateEvent: (req, res) => {
    const { id } = req.params,
      {
        title,
        date,
        startTime,
        endTime,
        location,
        description,
        rsvp,
        img,
      } = req.body,
      db = req.app.get("db");

    db.event.get_single_event(id).then((event) => {
      const newEvent = [
          title || event[0].title,
          date || event[0].date,
          startTime || event[0].startTime,
          endTime || event[0].endTime,
          location || event[0].location,
          description || event[0].description,
          rsvp || event[0].rsvp,
          img || event[0].img,
          +id
      ]
      
        db.event.update_event(newEvent)
        .then(() => {
            db.event.get_user_event(req.session.user.user_id)
            .then((events) => res.status(200).json(events))
            .catch(err => res.status(500).json(err))
        })
        .catch((err) => res.status(500).json(err));
    });
  },
};
