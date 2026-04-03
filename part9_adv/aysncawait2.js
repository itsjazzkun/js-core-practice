function fetchPostData(){
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove("post data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
     return new Promise((reslove) => {
       setTimeout(() => {
         reslove("comment data fetched");
       }, 3000);
     });
}
async function getBlogData(){
    try {
      console.log("fetching blog data...");
      
      // const blogData = await fetchPostData()
      // const commentData = await fetchCommentData()
     const [postData, commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
      console.log("fetch complete");
      console.log(postData);
      console.log(commentData);
      
      
      
    } catch (error) {
      console.error("error fecthing log data", error);
      
    }
}
getBlogData()