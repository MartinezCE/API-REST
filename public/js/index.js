
const postData = async (id) => {
    const api = `http://localhost:8080/`

    await fetch(`${api}${Number(id)}`, {
        method: 'DELETE',

    })
    window.location.href = "/products";

}

const putData = async (id) => {
    let formData = {
        'id': id,
        "title": document.getElementById('title').value,
        "price": document.getElementById('price').value,
        "thumbnail": document.getElementById('thumbnail').value
    };

    const api = `http://localhost:8080/`

    await fetch(`${api}${Number(id)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    window.location.href = "/products";

}
