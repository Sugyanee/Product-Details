import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    marginTop: spacing(10),
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "13.2rem",
    overflow: "hidden",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
      marginBottom: spacing(10),
    },
  },
  media: {
    width: "88%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(12),

    paddingBottom: "88%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(2),
      marginTop: 0,
      transform: "translateX(-8px)",
      overflow: "hidden",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",

      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10251873/2019/8/6/c1549bb0-2b4c-4c4a-9889-d3c0d0c6dbbf1565083224331-Maybelline-New-York-220-Natural-Beige-Fit-Me-Matte--Poreless-1.jpg"
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={"Foundation Cream"}
          heading={"MAYBELLINE FIT me!"}
          body={
            "You can return the product within 15 days if the delivered product is damaged,expired,different from ordered."
          }
        />
        <Button className={buttonStyles} startIcon={<ShoppingCartIcon />}>
          ADD TO CART
        </Button>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo;
