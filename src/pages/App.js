import React from 'react'

import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogListing'

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component{

    constructor(){
        super()

        this.state = {
            loading: true,
            search: '',
            blogs: [],
            blogsFiltered: []
        }
    }

    componentDidMount() {
        this.handleGetblogs()
    }

    handleTypeSearch = event =>{

        const blogsFiltered = this.state.blogsFiltered.filter(blog => {
            return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })

       this.setState({ 
            blogsFiltered
       })
    }

    handleGetblogs = () =>{
        fetch(link)
            .then(res => res.json())
            .then(res => this.setState({
                blogs: res,
                blogsFiltered: res,
                loading: false
            }))
    }

    render(){

        // console.log(this.state.blogsFiltered)

        if(this.state.loading === true){
            return(
                <h1>Loading..</h1>
            )
        }

        return(
            // <h1>loading : {JSON.stringify(this.state.loading)}</h1>
            <div style={styles.mainWrapper}>
                <SearchBar
                    search = {this.state.search}
                    onChangeSearch = {this.handleTypeSearch}
                />
                {this.state.blogsFiltered.map((blog,index)=>(
                    <BlogList
                        title = {blog.title}
                        content = {blog.content}
                        author = {blog.author}
                        key = {index}
                    />
                ))}
                
            </div>
        )
    }
}

const styles = {
    mainWrapper: {
        padding: 20
    }
}

export default App