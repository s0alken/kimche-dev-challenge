import React from "react";

const Home = ({ searchTerm, setSearchTerm, onSearch }) => {

    return (
        <section className="home">
            <div className="home__container container">

                <h4 className="home__header">Knowledge is power</h4>
                <h1 className="home__title">Country Search</h1>
                <h3 className="home__description">Search any country in the world!</h3>

                <form action="" className="home__search">
                    <input
                        type="search"
                        placeholder="Search a country..."
                        className="home__search-input"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                    <button className="button" onClick={onSearch}>Search</button>
                </form>

            </div>
        </section>
    )

}

export default Home;