import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Standard: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab>Übersicht</Tab>
        <Tab>Stammdaten</Tab>
        <Tab>Dokumente</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Inhalt der Übersicht.</TabPanel>
        <TabPanel>Inhalt der Stammdaten.</TabPanel>
        <TabPanel>Inhalt der Dokumente.</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const MitDeaktiviertemTab: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab>Übersicht</Tab>
        <Tab disabled>Abstammung</Tab>
        <Tab>Dokumente</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Inhalt der Übersicht.</TabPanel>
        <TabPanel>Nicht erreichbar.</TabPanel>
        <TabPanel>Inhalt der Dokumente.</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Vorausgewaehlt: Story = {
  render: () => (
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Übersicht</Tab>
        <Tab>Stammdaten</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Inhalt der Übersicht.</TabPanel>
        <TabPanel>Inhalt der Stammdaten.</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};
