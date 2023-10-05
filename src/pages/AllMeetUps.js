import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUps, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-ef012-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupData = [];
        for (const key in data) {
          const newMeetUp = {
            id: key,
            ...data[key],
          };
          meetupData.push(newMeetUp);
        }
        setIsLoading(false);
        setMeetups(meetupData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetUps} />
    </section>
  );
}

export default AllMeetupsPage;
