import axios from 'axios'
const Bookapi = axios.create(
    {
        baseURL: "https://www.googleapis.com"
    }
)

const getBooks = (SearchTerm, setBooks,startindex,setTotalPages) => {
    Bookapi.get("/books/v1/volumes", {
        params: {
            q: SearchTerm,
            maxResults:20,
            startIndex:startindex

        }
    }).then((response) => {
        console.log(response.data.items)
        setBooks(response.data.items)
        console.log(response.data)
        setTotalPages(Math.ceil((response.data.totalItems)/20))
    })

}

export { getBooks }