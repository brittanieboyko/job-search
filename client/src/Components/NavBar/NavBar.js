import React, { useState } from "react";
import { Pane, TabNavigation, SidebarTab } from "evergreen-ui";

const NavBar = () => {
  const [tabs] = useState([
    {
      path: "/",
      name: "Jobs",
    },
    {
      path: "/goals",
      name: "Goals",
    },
  ]);

  return (
    <Pane display="flex" height={240}>
      <TabNavigation marginBottom={16} flexBasis={240} padding={5} width={200}>
        {tabs.map((tab) => (
          <SidebarTab
            fontFamily={"'Space Grotesk', sans-serif"}
            key={tab.name}
            id={tab.name}
            aria-controls={`panel-${tab.name}`}
            is="a"
            href={tab.path}
          >
            {tab.name}
          </SidebarTab>
        ))}
      </TabNavigation>
    </Pane>
  );
};

export default NavBar;
