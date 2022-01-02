import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Careers from './Careers';
import Contact from './Contact';
import Catering from './Catering';
import Order from './Order';

import './App.css';

function App() {
  const test = <Home />
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />}/>
            <Route path="Catering" element={<Catering />}/>
            <Route path="/Careers" element={<Careers />}/>
            <Route path="/Contact%20Us" element={<Contact />}/>
            <Route path="/Order%20Delivery" element={<Order />}/>
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}


function Footer() {
  return(
    <div className="grid p-6 place-items-center">
      <p>LaVilla Family Dining & Pizzeria</p>
      <p>Proud Member of</p>
      <img alt="Image of Flint & Genesee Chamber of Commerce logo" src="https://lh3.googleusercontent.com/L7INqfwDwtQQCYbVDCdmsyaNqhMnFU0ygvVQrAazk2Ow-GVmCFRTMKU0irz9iMvSjbz0gy8D8PX-zcWRlDe3o4YkjVMqTPmROzrZsYl23PJX0cn5ag5fd6qexKMxy-XJt8aj1ewqSUF374dD-Nw_lpFh4GOvXvTaXXgjJx9GNTnJ2Zg-j5mWwEEl5PPqY6ENcAVujkqt-vupd-F2y41NGRn12z9hJ9PAcWsyQ3CUraEu3FHm1vWyMbgVVBBcT4Cb3lNLeJFIESeflSpKMhSWXomzIqJ1jmaLLKtDVSxfVfRwFLzibcwEpPCM0xJSkmk1rNdlZ6JYsiw81tWDWGaiTJNtkEcbS1pfDR3Ejal-SiEFWxyW-3ndHrX-8y0KomZoWoQ7wMSIcPZfB1qKAGizNE6nb1YYNdSusgb3t98uJExD6rZGCJoKRA2EoW0rwqcI0TqLz9iDWAkMJwGsyZTR8YaLqxFRI1vR_MNdy_rR2HvKjca29WLhA1A5Lp3ueKXBzRMb8Z7SeU1f9Lt2dbWAs2P_Pz_eQ9kMGkDP4XLMEDKFc_7j6qSl46r63NAb7K6kCCBfIwtHgiOK0WvYKiF9fBRtUKoTfKVaEzTBnNmSyRjjrjvFJ5Qb07bZmeOa5vUNhFV9dggjVpwFsnbDp0P__cY6-cX920G3Sg2ddi4iWpFBjGwYzeqap3RgHSccPcMp4XqVUp8NZnDD-v4VWQiU3ODU=s200-no?authuser=0"/>
      <img alt="Image of LaVilla logo" src="https://lh3.googleusercontent.com/eFtLLpiAVtH40W8U-0mWQt_oZOwLdp9wEG6u_SfDzI5TrG518ONzPDxHtV3YL6NdsvAek72qNT3c82TMJmoXDmd6c4WkXEXZsbYaayU7LYcEvv0i4wwmLY09xzdANkSXoD70alesNY0MNonRvsZEMDsdKU4NMOYRlFb6DasroJJ0uwR_2t6PVYpmB749sImbga3YQXdKn-GKV7tPnQFgh8mIqiA5tITlAkn3lKBrA5TMIJT6d1omyVDURRUIOaqsStUkXJUhRxGqhVvsbT49BMajJsZYVL6mWwZyHgXnt1P9mVD6R8WAEJaLLFzn6l46rWHKcxALC2B3_mC5ApSuNgs8hmGTRFtBpFJpsvykK05nAMglGqk9oRelM_5HEI8mplsPKLY1FPk30DNxMlzEmyuQuAfhEMEdFFPh-L4F58nQObAY_yi2ctNaS_dJTkLvrze00D0WSA4Es6USMf-LFVYL1Nqw4_yPWs7Ag7DglQ4Yd6LtIyhZ6ww8SSywEu-WWGnoF3E9RdTfAWToWwIhHODCce-ld5yenSMrdc9cAQGSDOniFa9Olo81vNzpAR98HWV_josdQrRvN4qZAb4M4ZCx4vqBzZ12kvqLspT4lQ1vkE-jQJprPRRg--lMOArKkHfD6TrESKpUupbkwAyPiOHn3rRtJ6rEaYqI7PbJilDqeYfH0Xj91OzZbMxaHOUPYPZNwoIZaJhIEKJHhIoHmCa6=w119-h80-no?authuser=0" />
    </div>
  );
}
export default App;
