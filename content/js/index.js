class Index {
    constructor() {
        var formEl = document.getElementById('form');
        let me = this;
        formEl.addEventListener('submit', function (event) {
            me.handleSubmit(event);
        });

    }


    async handleSubmit(e) {
        e.preventDefault();

        const file = document.getElementById( "Upload");

        const formData = new FormData();
        formData.append("Upload", file.files[0].name);
        formData.append("file", file.files[0]);
        let response = await fetch('http://localhost:5129/SubmitJcl', { // Change to port you are running on
            method: 'POST',
            body: formData
        });


        let data = await response.text();
        const tmpStuff = data;
        const txtJCL = document.getElementById("txtJCL");
        txtJCL.value = tmpStuff;
        console.log(tmpStuff);


    }
}

let index = new Index();
