const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSection = document.getElementById("post-section");

function renderPosts(){
    for (let i=0;i<posts.length;i++){
        let postContent = `
            <section class="profile-section">
                    <img src=${posts[i].avatar} alt="Courbet Profile Picture" class="profile-pic">
                    <p id="name">${posts[i].name}</p>
                    <p id="location">${posts[i].location}</p>
                </section>
                <img src=${posts[i].post} class="post-img">
                <section id="post-interaction">
                    <img src="/images/icon-heart.png">
                    <img src="/images/icon-comment.png">
                    <img src="/images/icon-dm.png">
                    <p id="likes">${posts[i].likes} likes</p>
                    <p id="caption"><span id="user-name">${posts[i].username}</span> ${posts[i].comment}</p>
                </section>
        `;
        postSection.innerHTML += postContent;
    }
}

renderPosts();