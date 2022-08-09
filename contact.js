const Contact = {
    template: `

    <!-- Formulir -->
    <div class="bg-warning card">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 jr">
                <div class="form-floating mb-3">
                    <input type="name" class="form-control" id="floatingInput" placeholder="name">
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="email">
                    <label for="floatingInput">Email</label>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        placeholder="Message"></textarea>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="https://cdn.kibrispdr.org/data/315/gambar-customer-service-2.png"
                    class="img-fluid gm_form">
            </div>
        </div>
    </div>

    <!-- Maps -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.314182207617!2d112.60828181472698!3d-7.966446794262205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78836d9a01906f%3A0xc73f81868b4daae7!2sAlterra%20Academy%20Malang!5e0!3m2!1sid!2sid!4v1659083398117!5m2!1sid!2sid"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    `
}
export default Contact