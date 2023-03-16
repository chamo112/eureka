import { Button } from '@chakra-ui/react';

type Props = {
  color: Color;
  size: string;
};

type Color = 'teal' | 'pink' | '';

const LocalButton = (props: Props): JSX.Element => {
  return (
    <>
      <Button
        colorScheme={props.color}
        size={props.size}
      >
        Button
      </Button>
    </>
  );
};

export default LocalButton;