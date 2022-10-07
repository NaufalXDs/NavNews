const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card lg:w-96 w-full bg-base-100 hover:shadow-md">
                {/* <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure> */}
                <div class="card-body rounded-md flex flex-col shadow-md m-2 md:m-0 p-4 justify-between hover:bg-primary hover:text-primary-content dark:bg-none dark:shadow-none cursor-pointer">
                    <h2 className="card-title">
                        {data.title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">
                            {data.category}
                        </div> */}
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Sedang tidak ada Berita</div>;
};

const News = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default News;
