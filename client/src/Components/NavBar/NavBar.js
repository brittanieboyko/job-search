import React, { useState } from "react";
import { Pane, TabNavigation, SidebarTab, majorScale } from "evergreen-ui";

const NavBar = () => {
  const [tabs, setTabs] = useState(["Job Buddy", "Goals", "Calendar"]);
  const [selectedIndex, setSelectedIndex] = useState([
    "Job Buddy",
    "Goals",
    "Calendar",
  ]);

  return (
    <Pane display="flex" height={240}>
      <TabNavigation marginBottom={16} flexBasis={240} marginRight={24} width={majorScale(1)}>
        {tabs.map((tab, index) => (
          <SidebarTab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
            is="a"
            href={index === 0 ? `/` : `/${tab}`}
          >
            {tab}
          </SidebarTab>
        ))}
      </TabNavigation>
    </Pane>
  );
};

export default NavBar;
