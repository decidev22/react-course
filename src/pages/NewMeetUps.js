import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-ef012-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "applicaiton/json", // signifies that this req carries json data
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
