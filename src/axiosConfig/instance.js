import axios from "axios";


const axiosInstance=axios.create(   {
    //baseUrl:
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWVlZTczMjkwYWRmMTRlMTQ4MzVjOTlhNTE4M2Y3OSIsInN1YiI6IjY1Y2Q0NTUwZDhhZjY3MDE0YThmMTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjBtv-VZU7JZNzDgq_nT3H8R-qY6R5pzS00IIgQWns8'
    }
})

export default axiosInstance