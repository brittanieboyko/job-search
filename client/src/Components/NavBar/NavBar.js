import React, { useState } from "react";
import { Pane, Tab, TabNavigation } from "evergreen-ui";

const NavBar = () => {
  const [tabs, setTabs] = useState(["Job Buddy", "Profile", "Calendar"]);

  return (
    <Pane height={40}>
      <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
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
