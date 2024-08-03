// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Helmet } from 'react-helmet';

type Props = {
  description?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
  logo?: string;
};

const PageContainer = ({ title, description, children, logo }: Props) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href={logo} sizes="16x16" />
    </Helmet>
    {children}
  </div>
);

export default PageContainer;
