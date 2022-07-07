import { makeStyles } from "@mui/material/styles";

export const LayoutStyle = makeStyles(theme=>({
    root:{
        dispaly:'flex',
    },
    topbarWidth:theme.mixins.toolbar
}))