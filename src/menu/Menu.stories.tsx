import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowsUpDownIcon,
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  FireIcon,
  HandThumbUpIcon,
  NoSymbolIcon,
  QrCodeIcon,
  ScaleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { IconButton } from '../button/IconButton';
import {
  Menu,
  MenuButton,
  MenuDescription,
  MenuDivider,
  MenuIconTile,
  MenuItem,
  MenuLabel,
  MenuItems,
} from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Overlays/Menu',
  component: Menu,
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const KebabMenu: Story = {
  render: () => (
    <div className="flex justify-end">
      <Menu>
        <MenuButton as={IconButton} aria-label="Aktionen" variant="secondary">
          <EllipsisVerticalIcon data-slot="icon" />
        </MenuButton>
        <MenuItems>
          <MenuItem onClick={() => {}}>
            <DocumentTextIcon data-slot="icon" />
            <MenuLabel>Steckbrief anzeigen</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => {}}>
            <QrCodeIcon data-slot="icon" />
            <MenuLabel>QR-Code generieren</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => {}}>
            <NoSymbolIcon data-slot="icon" />
            <MenuLabel>Ausgeschieden</MenuLabel>
          </MenuItem>
          <MenuItem onClick={() => {}}>
            <ArrowRightStartOnRectangleIcon data-slot="icon" />
            <MenuLabel>Tier übertragen</MenuLabel>
          </MenuItem>
          <MenuDivider />
          <MenuItem destructive onClick={() => {}}>
            <TrashIcon data-slot="icon" />
            <MenuLabel>Löschen</MenuLabel>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  ),
};

const HINZUFUEGEN = [
  { icon: ScaleIcon, title: 'Gewicht hinzufügen', description: 'Neues Gewicht eintragen' },
  { icon: ArrowsUpDownIcon, title: 'Größe hinzufügen', description: 'Neue Größe eintragen' },
  { icon: FireIcon, title: 'Temperatur hinzufügen', description: 'Neue Temperatur eintragen' },
  { icon: HandThumbUpIcon, title: 'Body Condition Score hinzufügen', description: 'Neuen Body Condition Score eintragen' },
];

export const MitBeschreibungen: Story = {
  render: () => (
    <div className="flex justify-end">
      <Menu>
        <MenuButton shape="pill">
          Hinzufügen
          <ChevronDownIcon data-slot="icon" />
        </MenuButton>
        <MenuItems className="w-80">
          {HINZUFUEGEN.map(({ icon: Icon, title, description }) => (
            <MenuItem key={title} onClick={() => {}}>
              <MenuIconTile>
                <Icon aria-hidden="true" />
              </MenuIconTile>
              <div>
                <MenuLabel className="font-semibold">{title}</MenuLabel>
                <MenuDescription>{description}</MenuDescription>
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  ),
};

export const MitDeaktiviertemEintrag: Story = {
  render: () => (
    <Menu>
      <MenuButton variant="secondary">
        Aktionen
        <ChevronDownIcon data-slot="icon" />
      </MenuButton>
      <MenuItems anchor="bottom start">
        <MenuItem onClick={() => {}}>
          <MenuLabel>Bearbeiten</MenuLabel>
        </MenuItem>
        <MenuItem disabled onClick={() => {}}>
          <MenuLabel>Duplizieren (bald verfügbar)</MenuLabel>
        </MenuItem>
        <MenuItem href="#">
          <MenuLabel>Als Link</MenuLabel>
        </MenuItem>
      </MenuItems>
    </Menu>
  ),
};
