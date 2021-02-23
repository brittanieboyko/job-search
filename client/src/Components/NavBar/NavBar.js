import React, { useState } from "react";
import { Pane, Tab, TabNavigation, SidebarTab, Paragraph } from "evergreen-ui";

const NavBar = () => {
  const [tabs, setTabs] = useState(["Job Buddy", "Profile", "Calendar"]);
  const [selectedIndex, setSelectedIndex] = useState(["Job Buddy", "Profile", "Calendar"]);

  return (
    <Pane display="flex" height={240}>
      <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <SidebarTab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
            key={tab}
            is="a"
            href={index === 0 ? `/` : `/${tab}`}
            isSelected={index === 0}
          >
            {tab}
          </SidebarTab>
        ))}
      </TabNavigation>
      <Pane padding={16} background="tint1" flex="1">

      </Pane>
    </Pane>
  )}


    // <Pane height={40}>
    //   <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
    //     {tabs.map((tab, index) => (
    //       <Tab
    //         key={tab}
    //         id={tab}
    //         aria-controls={`panel-${tab}`}
    //         is="a"
    //         href={index === 0 ? `/` : `/${tab}`}
    //       >
    //         {tab}
    //       </Tab>
    //     ))}
    //   </TabNavigation>
    // </Pane>

export default NavBar;
