import { ListItemIcon } from "@material-ui/core";
import { SubjectOutlined } from "@mui/icons-material";
import { AppBar, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import React from "react"
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240

const styles = makeStyles((theme) => {
    return {
        page: {
            background: "#f9f9f9",
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex",
            flexDirection: "row-reverse",
        },
        active: {
            background: "#f4f4f4",
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            paddingRight: drawerWidth
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        flex: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        avatar: {
            marginRight: theme.spacing(1)
        }
    }
})

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const classes = styles()
    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <SubjectOutlined color="secondary" />,
            path: '/form'
        }
    ]

    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography >
                    <div className={classes.flex}>
                        <Avatar className={classes.avatar} src='/icon.jpg' />
                        <Typography>
                            Mario
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            {/* side drawer */}
            <Drawer className={classes.drawer}
                variant="permanent" anchor="right" classes={{ paper: classes.drawerPaper }}>
                <div>
                    <Typography variant="h4" className={classes.title}>
                        Notes
                    </Typography>
                </div>

                {/* list / links */}

                <List>
                    {menuItem.map(item => {
                        return (
                            <ListItem key={item.text} onClick={() => navigate(item.path)}
                                sx={location.pathname === item.path && { background: "#eee" }} button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div >
    )
};

export default Layout;