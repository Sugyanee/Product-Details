import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {
  useGmailTabsStyles,
  useGmailTabItemStyles,
} from "@mui-treasury/styles/tabs";
import Inbox from "@material-ui/icons/Inbox";
import LocalOffer from "@material-ui/icons/LocalOffer";

const indicatorColors = ["#d93025", "#1a73e8", "#188038", "#e37400"];

const GmailTabsStyle = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = useGmailTabsStyles({ indicatorColors });
  const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] });
  const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] });
  const tabItem3Styles = useGmailTabItemStyles({ color: indicatorColors[2] });
  const tabItem4Styles = useGmailTabItemStyles({ color: indicatorColors[3] });
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      TabIndicatorProps={{
        children: <div className={`MuiIndicator-${tabIndex}`} />,
      }}
    >
      <Tab
        classes={tabItem1Styles}
        disableTouchRipple
        label={"Description"}
        icon={<Inbox />}
      />

      <Tab
        classes={tabItem3Styles}
        disableTouchRipple
        label={"Reviews"}
        icon={<LocalOffer />}
      />
    </Tabs>
  );
};

export default GmailTabsStyle;
