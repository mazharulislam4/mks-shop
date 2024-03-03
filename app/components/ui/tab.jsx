import { Tab, Tabs as TabsCom } from "@nextui-org/react";

function Tabs({ items = [] }) {
  return (
    <TabsCom aria-label="options"  variant="underlined"  size="md" classNames={{
        tabList: "w-full sm:flex-row flex-col items-center ",
        base: "mx-auto sm:inline-flex block"
    }} >
      {items.map((value) => (
        <Tab key={value.key} title={value.title}>
          {value.component}
        </Tab>
      ))}
    </TabsCom>
  );
}

export default Tabs;
