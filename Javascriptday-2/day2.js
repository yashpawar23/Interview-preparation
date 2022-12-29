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


    // let arr =[11,25,6];
    let object1 = {
        name:"yash",
        age : 43,
        sub:"maths",
        city:"mumbai",

        getIntro: function(){
            console.log(this.name + this.age)
        }
    }

    let object2 = {
           name:"ketan"
    }
    
    object2.__proto__ =object1