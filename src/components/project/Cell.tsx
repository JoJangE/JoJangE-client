import { cellProps } from '../../types/projectType';

export default function Cell(props: cellProps) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '32px',
        height: '18px',
        backgroundColor: props.checked ? '#00897B' : 'white',
      }}
      {...props}
    />
  );
}
