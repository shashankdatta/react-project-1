import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeeetups, setLoadedMeeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/record/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>
          <p>Loading...</p>
        </h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeeetups} />
    </section>
  );
}

export default AllMeetupsPage;
