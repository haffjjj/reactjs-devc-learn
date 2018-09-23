import React from 'react'

const BlogList = props =>{
    return(
        <div style={styles.contentWrapper}>
            <h1 style={styles.title}>{props.title}</h1>
            <div style={styles.line}/>
            <p>By <span style={styles.author}>{props.author}</span></p>
            <p style={styles.content}>{props.content}</p>
            <button style={styles.readMore}>Read More ...</button>
            {/* <p style={styles.readMore}>Read More ...</p> */}
        </div>
    )    
}

const styles = {
    contentWrapper:{
        backgroundColor: '#f7f7f7',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        border: '1px solid #eaeaea'
    },
    line: {
        height: 3,
        width: '15%',
        backgroundColor: '#d4d3d3',
        borderRadius: 100
    },
    title: {
        marginBottom: 10,
        color: '#313131'
    },
    author: {
        fontStyle: 'italic',
    },
    content: {
        color: '#565656'
    },
    readMore: {
        backgroundColor: '#e4e4e4',
        width: 100,
        padding: 10,
        borderRadius: 5,
        border: 'none'
    }
}

export default BlogList