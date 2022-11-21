import { FC, PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <html lang="ja">
        <div>{children}</div>
      </html>
    </>
  );
};

export default RootLayout;
