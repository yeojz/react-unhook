import * as React from 'react';

type Props = {
  md: any;
};

export const ShowDocs: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <div
        style={{ padding: '0 20px' }}
        dangerouslySetInnerHTML={{
          __html: props.md
        }}
      />
      >
    </div>
  );
};

export default ShowDocs;
