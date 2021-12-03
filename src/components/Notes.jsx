import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import { getNotes } from "../redux/thunks/notes"
import Note from "./Note";
import Masonry from "react-masonry-css";

const Notes = (props) => {
    React.useEffect(() => {
        dispatch(getNotes())
    }, [])

    const dispatch = useDispatch()
    const { notes } = useSelector(({ notes }) => notes)
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    return (
        <Container>

            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes && notes.map(note => {
                    return (
                        <div key={note.id} item xs={12} sm={6} lg={4}>
                            <Paper>
                                <Note {...note} />
                            </Paper>
                        </div>
                    )
                })}
            </Masonry>
        </Container>
    )
};

export default Notes;