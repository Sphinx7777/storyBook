import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { InboxScreen } from './InboxScreen';
import { defaultTasksData } from './TaskList.stories';

export default {
    component: InboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>]
};

const store = {
    getState: () => {
        return {
            tasks: defaultTasksData,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export const Default = () => <InboxScreen />;

export const Error = () => <InboxScreen error="Something" />;