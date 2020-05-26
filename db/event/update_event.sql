UPDATE event
SET title = $1,
    date = $2,
    start_time = $3, 
    end_time = $4, 
    location = $5, 
    description = $6, 
    rsvp = $7, 
    img = $8
WHERE event_id = $9;