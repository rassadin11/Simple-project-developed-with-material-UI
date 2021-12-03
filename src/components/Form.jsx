import { FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@mui/material";
import React from "react"
import Weather from "./Weather";
import { Radio } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeValues } from "../redux/actions/form";
import { Link, useNavigate } from "react-router-dom";
import { saveValues } from "../redux/actions/notes";
import { getNotes } from "../redux/thunks/notes";

const styles = {
    maxWidth: 450,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: '20px auto'
}

const inputs = {
    marginTop: '15px'
}

const Form = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    let navigate = useNavigate()

    const [sex, setSex] = React.useState('reminders')

    const handleSumbit = (e) => {
        e.preventDefault();
    }

    const saveChanges = async () => {
        dispatch(changeValues(title, desc, sex))
        dispatch(saveValues(title, desc, sex))
        dispatch(getNotes())
        setTimeout(() => navigate('/'), 0)
    }

    return (
        <FormControl action="#" sx={{ ...styles }} autoComplete="off" onSubmit={handleSumbit}>
            <TextField sx={inputs} onChange={(e) => setTitle(e.target.value)} label="Login" variant="outlined" color="primary" fullWidth required></TextField>
            <TextField sx={inputs} onChange={(e) => setDesc(e.target.value)} label="Description" variant="outlined" color="primary" multiline
                minRows={4} maxRows={8} fullWidth required></TextField>

            <FormLabel component="legend" sx={inputs}>Choose your gender</FormLabel>
            <RadioGroup value={sex} onChange={(e) => setSex(e.target.value)}>
                <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                <FormControlLabel value="work" control={<Radio />} label="Work" />
                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                <FormControlLabel value="money" control={<Radio />} label="Money" />
            </RadioGroup>

            <Weather saveChanges={saveChanges} />
            <Link to="/">Go to notes</Link>
        </FormControl>
    )
};

export default Form;