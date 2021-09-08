import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "3rem",
  },

  input: {
    "& input": {
      padding: ".5rem 1rem",
    },
  },
});

const Form = ({ cityName, setCityName, handleFormSubmit }) => {
  const handleFormChange = (e) => {
    setCityName(e.target.value);
  };

  const classes = useStyle();
  return (
    <form
      onSubmit={handleFormSubmit}
      onChange={handleFormChange}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Typography component="label" variant="h6">
        City name
      </Typography>
      <TextField
        value={cityName}
        className={classes.input}
        id="city-name"
        variant="outlined"
      />
    </form>
  );
};

export default Form;
