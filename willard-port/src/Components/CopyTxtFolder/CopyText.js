import React, { useState, useEffect } from 'react';
import FeatherIcons from 'feather-icons-react';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyText = ({ copyText, text, style = {}, className = '', ...props }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  }, [copied]);
  return (
    <CopyToClipboard
      text={copyText}
      onCopy={() => {
        setCopied(true);
      }}
    >
      {/* !!!!!!  CopyText Button */}
      <button
        onClick={e => e.stopPropagation()}
        {...props}
        type={'button'}
        className={`flex-c-c ${className}`}
        style={{ gap: 5, whiteSpace: 'nowrap', ...style }}
      >
        {/* <CopyToCheck
          success={copied}
          width={'1.3em'}
          height={'1.3em'}
          style={{ display: 'inline-block' }}
        /> */}
        {copied ? <span className="text-success">Copied!</span> : text}
      </button>
    </CopyToClipboard>
  );
};

export default CopyText;
