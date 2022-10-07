import { React, useState } from "react";
import Navbar from "@/Components/Navbar";
import { Helmet } from "react-helmet";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-neutral text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <link
                    rel="icon"
                    href="https://github.com/NaufalXDs/NaufalXDs/blob/main/Naufal.png?raw=true"
                ></link>
            </Helmet>
            <Navbar user={props.auth.user} />
            <div className="lg:w-96 w-full bg-base-100 shadow-xl m-auto mt-4 rounded-md">
                <h1 className="p-4 text-2xl text-center">Edit News</h1>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={(title) => setTitle(title.target.value)}
                        className="input w-full m-2 input-bordered"
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                        className="input w-full m-2 input-bordered"
                    />
                    <textarea
                        type="text"
                        placeholder="Category"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        className="input w-full m-2 input-bordered"
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary btn-wide m-8"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
