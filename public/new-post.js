const newPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#body").value.trim();

    if (title && content) {
        
        var response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#new-post-form").addEventListener("submit", newPost);