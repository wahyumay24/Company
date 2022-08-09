const About = {
  template: `
  <!-- Service -->
  <div class="text-center bg-warning">
      <div class="row container">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <img src="https://www.ecomm-guru.com/wp-content/uploads/2021/07/inner-erp-consulting.png"
                  alt="Gambar Animasi" class="img-fluid imgform">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 p">
              <h3>Apa Yang Kami Lakukan Untuk Anda?</h3>
              <p class="fs-5">Alterra Indonesia telah berdiri sejak tahun 2015 dengan nama awal Sepulsa.com.
                  Sebagai perusahaan teknologi terkemuka di Indonesia yang berfokus pada ekosistem billing dan
                  teknologi pembayaran, Alterra Indonesia kini telah terhubung ke berbagai penerbit tagihan (Bill
                  Issuers) dan metode pembayaran yang populer di Indonesia. Melalui sebuah innovative platform,
                  Alterra Indonesia menyediakan layanan yang dapat menghubungkan semua penerbit tagihan (Bill
                  Issuers), Digital Commerce, dan juga End-User.</p>
          </div>
      </div>
  </div>

  <!-- Testimony -->
  <div class="container">
      <div class="row"> 
          <div class="col-12 text-center">
              <h3>Testimonials</h3>
          </div>
          <div class="card col-lg-6 col-md-6 col-sm-12 border-warning cardtestimony" v-for="list_data in testi">
              <img .src="list_data.avatar" class="card-img-top img-fluid" alt="Gambar Data"
                  style="margin-top: 15px;">
              <div class="card-body">
                  <h5 class="card-title">{{list_data.name}}</h5>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">{{list_data.designation}}</li>
                      <li class="list-group-item">{{list_data.location}}</li>
                      <li class="list-group-item">Rating : {{list_data.rating}}</li>
                  </ul>
                  <p class="card-text">{{list_data.message}}</p>
              </div>
              <a .href="list_data.audio" class="btn btn-warning jc fw-bold" target="_blank">More Detail</a>
          </div>
      </div>
  </div>
    `,
    data(){
        return{
            testi:[]
        }
    },
    mounted() {
        fetch("https://testimonialapi.toolcarton.com/api")
        .then(response => response.json())
        .then(response => {
            this.testi = response
        })
    },
};
export default About;
