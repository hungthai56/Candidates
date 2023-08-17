import React from 'react';

function IcConfig(props) {
    return (
        <svg
            style={{
                fontSize: props?.fontSize ?? 24,
            }}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9994 8.10039C9.8455 8.10039 8.09941 9.84648 8.09941 12.0004C8.09941 14.1543 9.8455 15.9004 11.9994 15.9004C14.1533 15.9004 15.8994 14.1543 15.8994 12.0004C15.8994 9.84648 14.1533 8.10039 11.9994 8.10039ZM6.89941 12.0004C6.89941 9.18374 9.18276 6.90039 11.9994 6.90039C14.8161 6.90039 17.0994 9.18374 17.0994 12.0004C17.0994 14.817 14.8161 17.1004 11.9994 17.1004C9.18276 17.1004 6.89941 14.817 6.89941 12.0004Z"
                fill="#3078F1"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.48786 12.458C4.48786 12.458 4.46097 11.8484 4.48786 11.5436L2.99981 9.56254C3.20711 8.79075 3.5145 8.0494 3.91416 7.35736L6.36137 7.00776C6.57053 6.78665 6.78567 6.57151 7.00679 6.36235L7.35639 3.91513C8.04887 3.51639 8.7901 3.20905 9.56157 3.00079L11.5426 4.48884C11.8468 4.46194 12.1528 4.46194 12.457 4.48884L14.4381 3.00079C15.2099 3.20809 15.9512 3.51548 16.6432 3.91513L16.9928 6.36235C17.2199 6.57151 17.4351 6.78665 17.6383 7.00776L20.0855 7.35736C20.4842 8.04985 20.7916 8.79108 20.9998 9.56254L19.5118 11.5436C19.5118 11.5436 19.5387 12.1532 19.5118 12.458L20.9998 14.439C20.7925 15.2108 20.4851 15.9522 20.0855 16.6442L17.6383 16.9938C17.6383 16.9938 17.2169 17.4331 16.9928 17.6392L16.6432 20.0864C15.9508 20.4852 15.2095 20.7925 14.4381 21.0008L12.457 19.5127C12.1528 19.5396 11.8468 19.5396 11.5426 19.5127L9.56157 21.0008C8.78978 20.7935 8.04842 20.4861 7.35639 20.0864L7.00679 17.6392C6.78567 17.4301 6.57053 17.2149 6.36137 16.9938L3.91416 16.6442C3.51542 15.9517 3.20808 15.2105 2.99981 14.439L4.48786 12.458ZM5.78542 18.1237L3.74445 17.8322C3.37924 17.78 3.05832 17.5627 2.87423 17.243C2.42377 16.4607 2.07656 15.6233 1.84129 14.7518C1.74498 14.395 1.81841 14.0138 2.04034 13.7183L3.27697 12.072C3.27637 12.0272 3.27595 11.9787 3.27589 11.9282L2.04034 10.2832C1.81873 9.98821 1.74517 9.60763 1.84089 9.25127C2.07534 8.37838 2.42299 7.53992 2.875 6.75724C3.05923 6.43823 3.37977 6.22152 3.74445 6.16943L5.78542 5.87786C5.8158 5.84726 5.84628 5.81677 5.87688 5.7864L6.16845 3.74543C6.22062 3.38022 6.43788 3.0593 6.75759 2.87521C7.5399 2.42475 8.37728 2.07754 9.24882 1.84226C9.60557 1.74596 9.9868 1.81938 10.2823 2.04131L11.917 3.2692C11.9722 3.26849 12.0274 3.26849 12.0826 3.2692L13.7174 2.04131C14.0124 1.8197 14.393 1.74615 14.7493 1.84187C15.6222 2.07632 16.4607 2.42397 17.2434 2.87597C17.5624 3.0602 17.7791 3.38075 17.8312 3.74543L18.122 5.78132C18.1547 5.81361 18.1871 5.84603 18.2193 5.87859L20.2552 6.16943C20.6204 6.2216 20.9413 6.43886 21.1254 6.75857C21.5759 7.54088 21.9231 8.37826 22.1583 9.24979C22.2547 9.60655 22.1812 9.98778 21.9593 10.2832L20.7227 11.9296C20.7233 11.9744 20.7237 12.0228 20.7237 12.0734L21.9593 13.7183C22.1809 14.0134 22.2545 14.394 22.1587 14.7503C21.9243 15.6232 21.5766 16.4617 21.1246 17.2443C20.9404 17.5633 20.6199 17.7801 20.2552 17.8322L18.2125 18.124C18.1839 18.1529 18.1538 18.1832 18.1229 18.2142L17.8312 20.2562C17.779 20.6214 17.5617 20.9423 17.242 21.1264C16.4597 21.5768 15.6224 21.924 14.7508 22.1593C14.3941 22.2556 14.0128 22.1822 13.7174 21.9603L12.0826 20.7324C12.0274 20.7331 11.9722 20.7331 11.917 20.7324L10.2823 21.9603C9.98723 22.1819 9.60665 22.2554 9.25029 22.1597C8.3774 21.9253 7.53895 21.5776 6.75627 21.1256C6.43726 20.9414 6.22055 20.6208 6.16845 20.2562L5.87688 18.2152C5.84628 18.1848 5.8158 18.1543 5.78542 18.1237Z"
                fill="#3078F1"
            />
        </svg>
    );
}
export default IcConfig;
