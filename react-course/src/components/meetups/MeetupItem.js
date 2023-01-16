import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button style={{ marginRight: "5px" }}>To Favorites</button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0.5rem 0.5rem",
            }}
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
