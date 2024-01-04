import React from "react";

import { config } from "../../utils/constants";

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-Y25PERXF5V`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.ga_tracking_id}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);
export default Analytics;
