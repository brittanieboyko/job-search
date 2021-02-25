import React, { useState } from "react";
import { Pane, TabNavigation, SidebarTab, majorScale } from "evergreen-ui";

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [tabs] = useState([
    {
      path: "/",
      name: "Jobs",
    },
    {
      path: "/goals",
      name: "Goals",
    },
    {
      path: "/calendar",
      name: "Calendar",
    }
  ]);

  return (
    <Pane display="flex" height={240}>
      <TabNavigation marginBottom={16} flexBasis={240} padding={5} width={200}>
        {tabs.map((tab, index) => (
          <SidebarTab
            key={index}
            id={tab.name}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
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
