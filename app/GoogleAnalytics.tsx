import React from 'react';
import Script from 'next/script';



function GoogleAnalytics() {
    return (
        <>
            {/* <!-- Google tag (gtag.js) -->*/}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5LLNNXHP84" />
            <Script id='' strategy='lazyOnload'>


                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5LLNNXHP84');`}
            </Script>

        </>
    )
}

export default GoogleAnalytics


