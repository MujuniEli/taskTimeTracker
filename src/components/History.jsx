
export default function History () {
    return (
                <div>
                    <div className="filter">
                        <h3>Filter here to see your tracking history</h3>
                        <div className="filter-inputs">
                        <form action="">
                            <label htmlFor="">START DATE</label>
                            <input type="text" />
                            <br />
                            <label htmlFor="">END DATE</label>
                            <input type="text" />
                        </form>

                        <button> SEARCH </button>
                        </div>
                    </div>
                </div>
    )
}