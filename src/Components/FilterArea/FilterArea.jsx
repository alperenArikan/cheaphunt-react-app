import React ,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ContextProvider } from "../../Context/Context";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    display: "flex",
    justifyContent: "center"

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

const FilterArea = (props) => {

    const classes = useStyles();
    const {handleSetSortStatus, sortState} = useContext(ContextProvider)
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.Label} htmlFor="age-native-simple">Sort By</InputLabel>
                <Select
                native
                value={sortState}
                onChange={(e)=>handleSetSortStatus(e)}
                className={classes.Select}
                >
                <option value="Deal Rating" defaultValue>Deal Rating</option>
                <option value="Price">Price</option>
                <option value="Metacritic">Metacritic Reviews</option>
                <option value="Reviews">Reviews</option>

                </Select>
             </FormControl>
        </div>
    );
}

export default FilterArea;
