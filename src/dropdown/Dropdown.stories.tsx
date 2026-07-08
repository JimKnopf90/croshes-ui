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
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownDivider,
  DropdownIconTile,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Overlays/Dropdown',
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const KebabMenu: Story = {
  render: () => (
    <div className="flex justify-end">
      <Dropdown>
        <DropdownButton as={IconButton} aria-label="Aktionen" variant="secondary">
          <EllipsisVerticalIcon data-slot="icon" />
        </DropdownButton>
        <DropdownMenu>
          <DropdownItem onClick={() => {}}>
            <DocumentTextIcon data-slot="icon" />
            <DropdownLabel>Steckbrief anzeigen</DropdownLabel>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <QrCodeIcon data-slot="icon" />
            <DropdownLabel>QR-Code generieren</DropdownLabel>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <NoSymbolIcon data-slot="icon" />
            <DropdownLabel>Ausgeschieden</DropdownLabel>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <ArrowRightStartOnRectangleIcon data-slot="icon" />
            <DropdownLabel>Tier übertragen</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem destructive onClick={() => {}}>
            <TrashIcon data-slot="icon" />
            <DropdownLabel>Löschen</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
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
      <Dropdown>
        <DropdownButton shape="pill">
          Hinzufügen
          <ChevronDownIcon data-slot="icon" />
        </DropdownButton>
        <DropdownMenu className="w-80">
          {HINZUFUEGEN.map(({ icon: Icon, title, description }) => (
            <DropdownItem key={title} onClick={() => {}}>
              <DropdownIconTile>
                <Icon aria-hidden="true" />
              </DropdownIconTile>
              <div>
                <DropdownLabel className="font-semibold">{title}</DropdownLabel>
                <DropdownDescription>{description}</DropdownDescription>
              </div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};

export const MitDeaktiviertemEintrag: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton variant="secondary">
        Aktionen
        <ChevronDownIcon data-slot="icon" />
      </DropdownButton>
      <DropdownMenu anchor="bottom start">
        <DropdownItem onClick={() => {}}>
          <DropdownLabel>Bearbeiten</DropdownLabel>
        </DropdownItem>
        <DropdownItem disabled onClick={() => {}}>
          <DropdownLabel>Duplizieren (bald verfügbar)</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="#">
          <DropdownLabel>Als Link</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
