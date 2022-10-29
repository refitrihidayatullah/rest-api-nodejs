<!-- book rest api -->
<!-- refi tri hidayatullah -->

<!-- get all books -->

GET https://app-rest-api-books.herokuapp.com/api/books

<!--  post book-->

POST https://app-rest-api-books.herokuapp.com/api/books

example
content-type: application/json

    {
        "bookName":"Cinderella",
        "authorName":"J.K Rowling",
        "authorAge":"30",
        "genre":"Fantasy"
    }

<!-- get by id -->

GET https://app-rest-api-books.herokuapp.com/api/books/id

<!-- edit by id -->

PUT https://app-rest-api-books.herokuapp.com/api/books/id

<!-- delete by id -->

DELETE https://app-rest-api-books.herokuapp.com/api/books/id
