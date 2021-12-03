import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { deleteNote } from "../redux/actions/notes";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { blue, green, pink, yellow } from "@mui/material/colors";

const useStyles = makeStyles({
    test: {
        border: ({ category }) => {
            if (category === 'work') {
                return '1px solid red'
            }
        }
    },
    avatar: {
        backgroundColor: ({ category }) => {
            if (category === 'work') return yellow[700]
            if (category === 'work') return green[500]
            if (category === 'work') return pink[500]

            return blue[500]
        }
    }
})

const Note = ({ title, id, details, category }) => {
    const dispatch = useDispatch()

    const changeNote = () => {
        dispatch(deleteNote(id))
    }

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={changeNote}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    avatar={
                        <Avatar sx={{
                            backgroundColor: () => {
                                if (category === 'work') return yellow[700]
                                if (category === 'reminders') return green[500]
                                if (category === 'todos') return pink[500]

                                return blue[500]
                            }
                        }}>
                            {category.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={title}
                    subheader={category} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default Note;