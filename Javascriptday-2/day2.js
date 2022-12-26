const posts = [
    {id: 1, name: 'Post One', desc: 'Post One Desc'},
    {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
    {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
    {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
    {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
]


const addPost = (post, callback1) => {
    setTimeout( () => {
        posts.push(post)
        callback1()
    }, 3000 )
}


const showPosts = ( ) => {
    setTimeout( () => {
        posts.forEach( post => console.log(post.name) )
    }, 2000 )
}
function callbackFunction(name) {
    console.log('Hello ' + name);
    }
    function outerFunction(callback) {
    callback(name);
    }
    outerFunction(callbackFunction);