import { Button, MobileStepper, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme } from '@mui/material/styles';

const MyCollection = [
{
	label: "First Picture",
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
},
{
	label: "Second Picture",
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
},
{
	label: "Third Picture",
	imgPath:
  "https://th.bing.com/th/id/R.e7e1d49560cd878e43e43a847ee28b68?rik=d8hEioxCXg0pCg&pid=ImgRaw&r=0",
},
];

export default function TypeArticleAccueille() {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = useState(0);

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

return (
	<div
	style={{
		// marginLeft: "40%",
	}}
	>
	<h2>Article uploade</h2>
	<div
		style={{
		flexGrow: 1,
		}}
	>
		<Paper
		square
		elevation={0}
		style={{
			height: 50,
			display: "flex",
			paddingLeft: theme.spacing(4),
			backgroundColor: theme.palette.background.default,
			alignItems: "center",
		}}
		>
		<Typography>{MyCollection[index].label}</Typography>
		</Paper>
		<img
		src={MyCollection[index].imgPath}
		style={{
			height: 255,
			width: "100%",
			display: "block",
			overflow: "hidden",
		}}
		alt={MyCollection[index].label}
		/>
		<MobileStepper
		variant="text"
		position="static"
		index={index}
		steps={CollectionSize}
		nextButton={
			<Button
			size="small"
			onClick={goToNextPicture}
			disabled={index === CollectionSize - 1}
			>
			Next
			{theme.direction !== "rtl" ? (
				<KeyboardArrowRightIcon />
			) : (
				<KeyboardArrowLeftIcon />
			)}
			</Button>
		}
		/>
	</div>
	</div>
);
}
