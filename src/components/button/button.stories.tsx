import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button, { ButtonProps } from '.';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size="extraLarge">Extra Large</Button>
        <Button size="large">Large</Button>
        <Button size="default">Default</Button>
        <Button size="small">Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button>Default</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="warning">Warning</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="light">Light</Button>
      </ButtonRow>
      <ButtonRow>
        {/* "Note: The default color of spinner is Light" */}
        <Button loading type="secondary" />
        <Button loading type="light" />
        <Button disabled>Disabled</Button>
        <Button type="light" icon={SearchIcon}>
          Search
        </Button>
      </ButtonRow>
    </>
  );
};
