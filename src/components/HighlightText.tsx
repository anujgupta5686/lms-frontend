import React from 'react';

const HighlightText = ({ text }: { text: any }) => {
    return (
        <span className='font-bold text-slate-500'>
            {" "}
            {text}
        </span>
    );
};

export default HighlightText;
