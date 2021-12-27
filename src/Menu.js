
function Menu() {
  const images = [
    "https://lh3.googleusercontent.com/I2UhZtOSNm1GIPI8KeGGrM-YnWMzjVNjWhEDw5wqUBhWfdaojGUwLWDM275R6qrOpSjduAE1Mohmvt6jEb4CvjQ57YDYv3mYOkfzyjbHzha5AKr6jxgTowGgbKH23M-xcZJylEFdvQiJcAYi_K5TCSI_IRzRoYsDhqGXrPzEzxHqlplfXOCSi9E6pV2aaiqAuG2S4N6Ga4ilmi4nqt0l0rHgCfizMdvFknQp37SImeWaJ5ydKZJdebk0AlwaejZ7Xm5r9RGam3ek9AojvNc8BmLnufl1bIbsbPN2ip3WbHiFH-uPmF0AUrYZKooBza3yrlOjlbv4znG4Y-6-6JddHjPw5n0th3gn-aNXAey74r6SdxXvQI5hNMbzOa2O7gxNp4gALEBdiIBb0F-dSUugvWmLtBvrzhib0e7ATn_N9MahdEfAeXjQZuA5eE1HZZQ3g0VWnMGC9NuLsy7jPFkmlZlFGA6Aq-M9nx06lEwCdB1ZAWLlFv4AFkIxMlsVHcQY0OrcpMEHzXyEutQStZhcuXMv7sl4tr1w5wgs0Sls_wr7XeomUNEoOSOfg4hV7ktjPoHmIaQdL9iMvfvtniRFzJDcpMf67L_wTT42s1HxEXXwxVgb3-iBrO3EKcN3rM2GIqdWU0fdCn7dIVH4pnu-a3xc3LLCBtJlROBRylG4wt6hlHO42YzPIQXVeptFfnFNUYXvYIYiXkk5xqBKUnHZD-n0=w398-h655-no?authuser=0",
    "https://lh3.googleusercontent.com/39VYPn2Vr2AQcpGTqPFCn_1pj17mlXS_UtAnjOls8HGQMD6MsPHTQk_7YDhIF1hZJu0bUdHWc82iSZAooT1NkuIi7urlb3ggSTFZgKGgjbgSS3GfLDehvp4fbLsSzgGT-k0IWhKACxU0tiIsQU4KFxwfd1OOzKCtayXBUpfeJDTSJrxKWF5mssSfsxGHVRb0v4uWKOBA4xUGb0RjWGI2DYqERr7meBO9qb5Hp_uRb1vYyst2-mAgXbW1n7v4p3LupkSVc2Mk4mjSgAT-wUDDAirQNZv7OVTUtsQyi7FsrDI7xVK4WcZobmYuo-CyaertajBLpsUuXj1NC49yfkJDE0TVkfr2nRV_zv8yKt_dQPU6D3Rg3Jb1Z08NV_4v8yjHN8RSpWEl-iVMrDZJD_ekwF0Jo3DsKQZ4xbznfcqsa_Qkokjlj-F-1Q_A4i7OqTJso_rLuh7v-vu0uZdKmpUamRVRfLeFVYb69HrAuR3gJo7fmoywoY2FMOupFICw9uG_Ifqmi0CMd_Tbmhh0XJL9xFhtJJ0WHW4ZzeZ99GeITDxMUiwpFVZFUCcntfhtIhZiGpYahFuO5TAVh8Dr8gWBXY0TEK6VGy40mpZcII0_DeE2y1YwxXPsQm49JHGXfs80QMBlnG1rRGnls0ncPGjBMbvbWVGL1nPAMR5c81ACqj9ow7kf9JL8LJSUFIJM9LcH81eU92gTV2rWGGirivXYAEKU=w398-h655-no?authuser=0"
  ]
  return(
    <div id="Menu" className="grid gap-y-10 grid-cols-1 place-items-center p-6">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center p-6 border-2 border-green-700 bg-red-800"><img src={image} alt="Image of restaurant menu" /></div>
      ))}
    </div>
  );
}
export default Menu;