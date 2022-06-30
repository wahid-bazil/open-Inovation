import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa"







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