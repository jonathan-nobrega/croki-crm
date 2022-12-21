import { Spin } from 'react-cssfx-loading';

export default function Loading() {
  return (
    <Spin
      color="#FF0000"
      width="75px"
      height="75px"
      duration="3s"
    />
  );
}
