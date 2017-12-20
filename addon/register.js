import React from 'react';
import addons from '@storybook/addons';

import { Panel } from './addon-panel';

import { theme } from '../src/.theme/default';

const ADDON_ID = 'addon:glamorous';
const PANEL_ID = 'panel:glamorous';
export const EVENT_ID = 'event:glamorous';

let channel;

function onChange(data) {
  channel.emit(EVENT_ID, data);
}

addons.register(ADDON_ID, () => {
  channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Glamorous',
    render: () => <Panel onchange={onChange} data={theme} />,
  });
});
