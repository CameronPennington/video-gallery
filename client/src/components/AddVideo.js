import React, { useEffect, useState } from "react";
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

import _ from "lodash";

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
		const update = { [e.target.name]: { value: e.target.checked } };
		const merged = _.merge(tag, update);
		setTag(merged);
	};
	const handleJJCheck = (e) => {
		e.target.checked ? setJJTag(e.target.name) : setJJTag("");
	};
	const handleSubmit = () => {};

	const [tag, setTag] = useState({
		jiuJitsu: { label: "Jiu Jitsu", value: false },
		trainForLife: { label: "Train for Life", value: false },
	});
	const [jjTag, setJJTag] = useState({
		youth: { label: "Youth", value: false },
		fundamentals: { label: "Fundamentals", value: false },
		intermediate: { label: "Intermediate", value: false },
		advanced: { label: "Advanced", value: false },
	});
	const [jjContent, setJJContent] = useState({
		sideControl: { label: "Side Control", value: false },
		guard: { label: "Guard", value: false },
		mount: { label: "Mount", value: false },
		turtle: { label: "Turtle", value: false },
	});
	//Refactor: change from array of strings to object with boolean values, like on Material UI checkbox page
	const tags = Object.entries(tag).sort();
	const jjTags = Object.entries(jjTag).sort();

	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
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
									key={x[0]}
									control={
										<Checkbox
											name={x[0]}
											checked={tag[i]}
											onChange={handleCheck}
										></Checkbox>
									}
									label={x[1].label}
								/>
							);
						})}
						{tag.jiuJitsu.value == true && (
							<div>
								{jjTags.map((x, i) => {
									return (
										<FormControlLabel
											key={x[0]}
											control={
												<Checkbox
													name={x}
													// checked={x.localeCompare(jjTag) === 0}
													onChange={handleJJCheck}
												></Checkbox>
											}
											label={x[1].label}
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
