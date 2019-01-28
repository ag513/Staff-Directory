fetch('https://interview.dev.steinias.com/api/employees')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {

    myJson.sort(function (a, b) {
      return new Date(a.birthday) - new Date(b.birthday);
    })

    console.log(JSON.stringify(myJson));
    let str = ``;

    myJson.forEach((o, index) => {
      str = str + `
      <div class="mb-3 col-md-3 col-xs-12 col-sm-12">
      <img class="img-fluid card-img-top" style="background-color:#f0eff4" src="./img/profile.png" alt="Card image cap" style="height:auto; max-width: 100%">
      <div class="card-img-overlay">
        <button class="btn btn-sm btn-default btn-circle button-overlay button-overlay-sm-xs" data-toggle="modal" data-target="#exampleModalCenter-${index}"><i class="fa fa-list"></i></button>
      </div>
      <div class="img-divider" style="border-color:black;"></div>
      <div class="card-body">
        <h5 class="card-text">${o.name}</h5>
        <h6 class="card-text">${o.jobTitle}</h6>
      </div>
        <div class="modal fade" id="exampleModalCenter-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:orange;">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-xs-5 col-sm-5">
                      <img class="card-img-top" src="./img/profile.png" alt="Card image cap">
                    </div>
    
                    <div class="col-md-8 col-xs-7 col-sm-7">
                      <p class="bg-light text-dark" style="font: size 12;px; display: inline;"><b>${o.name}</b>
                        <p>
    
                          <p style="font-size:10px; style=" font: size 12;px; display: inline;">${o.jobTitle}</p>
    
                          <p class="text-white bg-warning" class="text-secondary" style="font-size:8px; display: inline;">
                            joined on ${new Date(o.hireDate).toGMTString().split(" ").splice(0,4).join(" ")}</p>
    
                          <p style="color: orange;"><img src="./img/cake.png" style="height:11px;"> <b> Birthday:${new Date(o.birthday).toGMTString().split(" ").splice(0,4).join(" ")}
                            </b> </p>
    
                          <p><img src="./img/email.png" style="height:11px;"> ${o.email} </p>
                          <p><img src="./img/phone.png" style="height:11px;"> ${o.mobile}</p>
    
    
                          <p class="text-warning" style="font-size:9px;"> ${o.jobDescription}.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
     `

    //  if((index+1)%4 == 0) {
    //   str = str + `<div class="w-100 py-2"></div>`
    //  }
    });
    div = document.getElementById('body');
    div.insertAdjacentHTML('beforeend', str);
  });