const posts=[
    {
        title:'one content',
        name:'two content'
    },
    {
        title:'three content',
        name:' four content'
    }
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) => {
            output+='<li>${post}</li>';
            
        });
        document.body.innerHTML=output;

    },2000);

}

getPost();

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    }, 3000
);
}

createPost({
    title:'possss', body:'ssasada'
},getPost);