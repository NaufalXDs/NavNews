import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import News from "@/Components/Homepage/News";
import Paginator from "@/Components/Homepage/Paginator";
import { Helmet } from "react-helmet";

export default function Homepage(props) {
    return (
        // console.log("data = ", props),
        <div className="min-h-screen bg-neutral text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <link
                    rel="icon"
                    href="https://github.com/NaufalXDs/NaufalXDs/blob/main/Naufal.png?raw=true"
                ></link>
            </Helmet>
            {/* <Head title={props.title} /> */}
            <Navbar user={props.auth.user} />
            <div className="justify-center flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <News news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
