import React from 'react';

type TodoStatusProps = {
  total: number;
  done: number;
};

export default function TodoStatus({
  total,
  done
}: TodoStatusProps): JSX.Element {
  return (
    <div>
      Total: {total}, Done: {done}
    </div>
  );
}
