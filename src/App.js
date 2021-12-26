import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Careers from './Careers';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}


function Footer() {
  return(
    <div>
      LaVilla Family Dining & Pizzeria
      Proud Member of
      <img src="https://lh3.googleusercontent.com/L7INqfwDwtQQCYbVDCdmsyaNqhMnFU0ygvVQrAazk2Ow-GVmCFRTMKU0irz9iMvSjbz0gy8D8PX-zcWRlDe3o4YkjVMqTPmROzrZsYl23PJX0cn5ag5fd6qexKMxy-XJt8aj1ewqSUF374dD-Nw_lpFh4GOvXvTaXXgjJx9GNTnJ2Zg-j5mWwEEl5PPqY6ENcAVujkqt-vupd-F2y41NGRn12z9hJ9PAcWsyQ3CUraEu3FHm1vWyMbgVVBBcT4Cb3lNLeJFIESeflSpKMhSWXomzIqJ1jmaLLKtDVSxfVfRwFLzibcwEpPCM0xJSkmk1rNdlZ6JYsiw81tWDWGaiTJNtkEcbS1pfDR3Ejal-SiEFWxyW-3ndHrX-8y0KomZoWoQ7wMSIcPZfB1qKAGizNE6nb1YYNdSusgb3t98uJExD6rZGCJoKRA2EoW0rwqcI0TqLz9iDWAkMJwGsyZTR8YaLqxFRI1vR_MNdy_rR2HvKjca29WLhA1A5Lp3ueKXBzRMb8Z7SeU1f9Lt2dbWAs2P_Pz_eQ9kMGkDP4XLMEDKFc_7j6qSl46r63NAb7K6kCCBfIwtHgiOK0WvYKiF9fBRtUKoTfKVaEzTBnNmSyRjjrjvFJ5Qb07bZmeOa5vUNhFV9dggjVpwFsnbDp0P__cY6-cX920G3Sg2ddi4iWpFBjGwYzeqap3RgHSccPcMp4XqVUp8NZnDD-v4VWQiU3ODU=s200-no?authuser=0"/>
    </div>
  );
}
export default App;
