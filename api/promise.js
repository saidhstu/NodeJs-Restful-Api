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
            output+='<li>${post.title}</li>';
            
        });
        document.body.innerHTML=output;

    },2000);

}

getPost();

function createPost(post){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
            const error=false;
            
            if(!error){
                resolve();
            }
            else{
                reject('Somethin wrong');
            }
        }, 3000
    );

    });
   
}

createPost({title:'sasdasd',body:'asdasdad'}).then(getPost);

