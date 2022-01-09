import { SRLWrapper } from "simple-react-lightbox";
import React, {useState} from "react";

function Menu() {

  const [divNumber, setDivNumber] = useState(1);
  //div numbers with useState hook

  const images = [
    "https://lh3.googleusercontent.com/pw/AM-JKLU--pWeYN-67_TS_dLiFzfbCsOat0KsIumS7NmE8W1b_VGQFal4A--G0-KuO6wZEuRcrhrcmTfVslAZg6CpfbsNGIkeC69uSaIZYITRfG1WAObTdN2ENA0p_6vsnlRly-yHsfI3jsJYSSiJ40se4uvt=w405-h666-no?authuser=0",
    "https://lh3.googleusercontent.com/39VYPn2Vr2AQcpGTqPFCn_1pj17mlXS_UtAnjOls8HGQMD6MsPHTQk_7YDhIF1hZJu0bUdHWc82iSZAooT1NkuIi7urlb3ggSTFZgKGgjbgSS3GfLDehvp4fbLsSzgGT-k0IWhKACxU0tiIsQU4KFxwfd1OOzKCtayXBUpfeJDTSJrxKWF5mssSfsxGHVRb0v4uWKOBA4xUGb0RjWGI2DYqERr7meBO9qb5Hp_uRb1vYyst2-mAgXbW1n7v4p3LupkSVc2Mk4mjSgAT-wUDDAirQNZv7OVTUtsQyi7FsrDI7xVK4WcZobmYuo-CyaertajBLpsUuXj1NC49yfkJDE0TVkfr2nRV_zv8yKt_dQPU6D3Rg3Jb1Z08NV_4v8yjHN8RSpWEl-iVMrDZJD_ekwF0Jo3DsKQZ4xbznfcqsa_Qkokjlj-F-1Q_A4i7OqTJso_rLuh7v-vu0uZdKmpUamRVRfLeFVYb69HrAuR3gJo7fmoywoY2FMOupFICw9uG_Ifqmi0CMd_Tbmhh0XJL9xFhtJJ0WHW4ZzeZ99GeITDxMUiwpFVZFUCcntfhtIhZiGpYahFuO5TAVh8Dr8gWBXY0TEK6VGy40mpZcII0_DeE2y1YwxXPsQm49JHGXfs80QMBlnG1rRGnls0ncPGjBMbvbWVGL1nPAMR5c81ACqj9ow7kf9JL8LJSUFIJM9LcH81eU92gTV2rWGGirivXYAEKU=w398-h655-no?authuser=0"
  ]

  const divs = {
    1:<div className="grid gap-y-10 h-full w-full place-items-center p-6 pt-20">
        {images.map((image, index) => (
          <div key={index}>
          <SRLWrapper>
            <a className="flex justify-center p-6 border-2 border-white bg-green-700" href={image} >
              <img src={image} alt="Restaurant menu" />
            </a>
          </SRLWrapper>
          </div>
        ))} 
      </div>,
    2: <div></div>
  }
  
  return(
    <div className="grid place-items-center shadow-md bg-breadsticks bg-cover bg-fixed bg-center">
      {
      divs[divNumber]
      }
    </div>
  );
}
export default Menu;