import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import ConfigMap from '../../lib/k8s/configMap';
import { Lease } from '../../lib/k8s/lease';
import { RuntimeClass } from '../../lib/k8s/runtime';
import Secret from '../../lib/k8s/secret';
import store from '../../redux/stores/store';
import { CreateResourceButton, CreateResourceButtonProps } from './CreateResourceButton';

export default {
  title: 'CreateResourceButton',
  component: CreateResourceButton,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: StoryFn<CreateResourceButtonProps> = args => <CreateResourceButton {...args} />;

export const ConfigMapStory = Template.bind({});
ConfigMapStory.args = {
  resourceClass: ConfigMap,
};

export const LeaseStory = Template.bind({});
LeaseStory.args = {
  resourceClass: Lease,
};

export const RuntimeClassStory = Template.bind({});
RuntimeClassStory.args = {
  resourceClass: RuntimeClass,
};

export const SecretStory = Template.bind({});
SecretStory.args = {
  resourceClass: Secret,
};
