
export default function History () {
    return (
                <div>
                    <div className="filter">
                        <h3>Filter here to see your tracking history</h3>
                        <div className="filter-inputs">
                        <form action="" className="form">
                            <div className="label-name">
                            <p> START DATE: </p>
                            <input type="text" />
                            </div>
                            <br />
                            <div className="label-name">
                            <p>END DATE:</p>
                            <input type="text" />
                            </div>
                        </form>

                        <button> SEARCH </button>
                        </div>
                    </div>
                </div>
    )
}