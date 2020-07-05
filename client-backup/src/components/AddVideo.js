import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Buttons";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ErrorSnackbar from "./ErrorSnackbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const AddVideo = (props) => {
	const classes = useStyles();

	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					{/* <Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar> */}
					<Typography component="h1" variant="h5">
						Add Video
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={handleSubmit}
						id="form"
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									name="url"
									variant="outlined"
									required
									fullWidth
									id="videoUrl"
									label="URL"
									autoFocus
									onChange={onChange}
									// value={firstName}
									// error={firstNameHelper.length > 0}
									// helperText={firstNameHelper}
									// inputProps={{ maxlength: 10 }}
								/>
							</Grid>
						</Grid>
						<Button
							aria-label="Submit Registration"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Add Video
						</Button>
						<ErrorSnackbar errors={props.errors} />
					</form>
				</div>
			</Container>
		</>
	);
};

export default AddVideo;
