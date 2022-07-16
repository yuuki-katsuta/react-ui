import { AlertButton, Button } from './libs/Button';
import { Heading } from './libs/Heading';
import { Input } from './libs/Input';
import { LargeText } from './libs/LargeText';
import { PasswordForm } from './libs/PasswordForm';
import { Text } from './libs/Text';
import { Textarea } from './libs/Textarea';

export const App = () => {
  return (
    <>
      <Heading tag={'h1'}>見出し</Heading>
      <Text text='hello' />
      <Text text='world' />
      <LargeText text='umaru' />
      <Button
        onClick={() => console.log('clicked!!')}
        title='Button'
        type='primary'
        width={100}
      />
      <Button
        onClick={() => console.log('clicked!!')}
        title='Button'
        type='secondary'
      />
      <Button
        onClick={() => console.log('clicked!!')}
        title='Button'
        type='error'
      />
      <br />
      <br />
      <AlertButton title='危険!!' onClick={() => alert('危険!')} />
      <br />
      <Textarea width={500} maxLength={100} />
      <Input type='text' />
      <Input type='password' />
      <Input type='number' />
      <PasswordForm onSubmit={(password) => console.log(password)} />
    </>
  );
};
