import React, { useEffect, useState } from 'react';
import { getUrl } from '@components/ContentCard/api/picsum';

export default function Image({ src }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!src) {
      getUrl().then(url => {
        setUrl(url);
        console.log('Edn 1')
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [src]);

  return (
    <div className="col-span-3 row-span-4 p-1 m-1">
      <div>
        {
          loading
          ? <div className="rounded-t-xl object-cover h-48 w-full">Loading...</div>
          : (
            <img
              src={src || url}
              alt="Placeholder"
              className="rounded-t-xl object-cover h-48 w-full"
            />
          )
        }
      </div>
    </div>
  )
}
