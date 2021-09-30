import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome to the Netflix</h1>
      <p>Streaming service with your favority movies</p>
      <div className={classes.position}>
        <div className={classes["netflix-stick"]}>
          <div className={classes.thing}></div>
        </div>
      </div>
    </section>
  );
};

export default StartingPageContent;
