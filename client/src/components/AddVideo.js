import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ErrorSnackbar from "./ErrorSnackbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
	const { isAuthenticated, properties } = props.user;
	const onChange = (e) => {};
	const handleCheck = (e) => {
		if (e.target.checked) {
			setTag(e.target.name);
		} else {
			setTag("");
			setJJTag("");
		}
	};
	const handleJJCheck = (e) => {
		e.target.checked ? setJJTag(e.target.name) : setJJTag("");
	};
	const handleSubmit = () => {};

	const [tag, setTag] = useState("");
	const [jjTag, setJJTag] = useState("");
	//Refactor: change from array of strings to object with boolean values, like on Material UI checkbox page
	const tags = ["Jiu Jitsu", "Train for Life"];
	const jjTags = ["Youth", "Fundamentals", "Intermediate", "Advanced"];

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
						{" "}
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<TextField
									name="title"
									variant="outlined"
									required
									fullWidth
									id="title"
									label="Title"
									autoFocus
									onChange={onChange}
									// value={firstName}
									// error={firstNameHelper.length > 0}
									// helperText={firstNameHelper}
									// inputProps={{ maxlength: 10 }}
								/>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<TextField
									name="URL"
									variant="outlined"
									required
									fullWidth
									id="url"
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
							aria-label="Upload Video"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Upload
						</Button>
						{tags.map((x, i) => {
							return (
								<FormControlLabel
									control={
										<Checkbox
											name={x}
											checked={x.localeCompare(tag) === 0}
											onChange={handleCheck}
										></Checkbox>
									}
									label={x}
								/>
							);
						})}
						{tag.length > 0 && "Jiu Jitsu".localeCompare(tag) == 0 && (
							<div>
								{jjTags.map((x, i) => {
									return (
										<FormControlLabel
											control={
												<Checkbox
													name={x}
													checked={x.localeCompare(jjTag) === 0}
													onChange={handleJJCheck}
												></Checkbox>
											}
											label={x}
										/>
									);
								})}
							</div>
						)}
						<ErrorSnackbar errors={props.errors} />
					</form>
				</div>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
	errors: state.errors,
});

export default connect(mapStateToProps)(AddVideo);
