import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa"
import {createTheme} from "@mui/material";

const defaultColor = "#ff0000";
const hoverColor = "#0000ff";
const focusColor = "#00ff00";


const theme :any = createTheme({
    overrides: {
        MuiOutlinedInput: {
            root: {
                // Hover state
                "&:hover $notchedOutline": {
                    borderColor: hoverColor
                },
                // Focused state
                "&$focused $notchedOutline": {
                    borderColor: focusColor
                }
            },
            // Default State
            notchedOutline: {
                borderColor: defaultColor
            }
        }
    }
});

const SelectS = () => {


    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };



    return (
        <div className="SelectS">

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Startup_projet</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Startup_projet"
                    onChange={handleChange}
                    IconComponent={FaChevronDown}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
export default SelectS