const services = {
  product1: [
    {
      name: "web",
      description: "web desc",
      img: "web img",
    },
  ],
};

//debugger;

for (key in services) {
  document.write(
    <div class="col-md-4">
      <div class="service-box">
        <div class="service-ico">
          <a href="./service.html">
            <span class="ico-circle">
              <i class="ion-monitor"></i>
            </span>
          </a>
        </div>
        <div class="service-content">
          <h2 class="s-title">
            <a href="./service.html">Web Design</a>
          </h2>
          <p class="s-description text-center">
            Our designers will work with you to understand needs of your's and
            your customers'. We are happy to create beautiful websites which is
            a part of your and our success.
          </p>
        </div>
      </div>
    </div>
  );
  console.log(services[key]);
}
