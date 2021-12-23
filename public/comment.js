const newComment = async (event) => {
    event.preventDefault();
    const postId = document.getElementById("postId").value;
    const content = document.getElementById("content").value;

    await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ postId, content }),
        headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/dashboard");
};

document.querySelector("#newComment").addEventListener("submit", newComment);