import React, { useState } from "react";
import { Pane, Tab, TabNavigation } from "evergreen-ui";

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs, setTabs] = useState(["Job Buddy", "profile", "calendar"]);

  return (
    <Pane height={40}>
      <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
            is="a"
            href={index === 0 ? `/` : `/${tab}`}
          >
            {tab}
          </Tab>
        ))}
      </TabNavigation>
    </Pane>
  );
};
export default NavBar;
