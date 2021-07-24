import Link from 'next/link';
import Head from 'next/head';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
const NotFound = () => {
    const router = useRouter();
    
    useEffect(() =>
    {
       setTimeout(() =>
       {
         router.push('/');
       } , 3000)
    }, [])
    
    return (
        <>
        <Head>
           <title>Complaint Box | Not Found</title>
           <meta name = "keywords" content = "Complaints"/>
        </Head>
        <div className = "not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href = "/"><a>Complaint Page</a></Link></p>
        </div>
        </>
    );
}
 
export default NotFound;
