import React, { useState } from "react";
import { Pane, TabNavigation, SidebarTab, majorScale } from "evergreen-ui";

const NavBar = () => {
  const [tabs, setTabs] = useState(["Jobs", "Goals", "Calendar"]);
  const [selectedIndex, setSelectedIndex] = useState([
    "Jobs",
    "Goals",
    "Calendar",
  ]);
//   <div
//   style={{
//     padding: "10px",
//     width: "40%",
//     background: "#f0f0f0"
//   }}
// >
  return (
    <Pane display="flex" height={240}>
      <TabNavigation marginBottom={16} flexBasis={240} marginRight={24} padding={5} width={200} background={"blue"}>
        {tabs.map((tab, index) => (
          <SidebarTab
          background={"red"}
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
